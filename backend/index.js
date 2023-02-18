const express = require('express');
const cors = require('cors');
const app = express();
const stripe = require('stripe')('sk_test_51MZHIfSIynhd8VcpEAe4dHhq3iSKXhZnlR4QMMOxgrmejLFlc6UX4Zv8RmnwFS0TLYZf6x60r0gUOvAQkUQ4J3JV00zhYbmHZN')

app.use(cors())
app.use(express.json({verify: (req,res,buf) => { req.rawBody = buf }}));

app.use('/api', require('./webhook'))
app.post('/create-checkout-session', async (req, res) => {
  const {items, email}=req.body
  const transformedItem = items.map((e)=>({
    price_data: {
      currency: 'inr',
      product_data: {
        name: e.title,
        images:[e.img]
      },
      unit_amount: e.price*100,
    },
    quantity: e.quantity
  }))

  const session = await stripe.checkout.sessions.create({
    shipping_address_collection: {allowed_countries: ['US', 'CA', 'IN']},
  shipping_options: [
    {
      shipping_rate_data: {
        type: 'fixed_amount',
        fixed_amount: {amount: 0, currency: 'inr'},
        display_name: 'Free shipping',
        delivery_estimate: {
          minimum: {unit: 'business_day', value: 5},
          maximum: {unit: 'business_day', value: 7},
        },
      },
    },
    {
      shipping_rate_data: {
        type: 'fixed_amount',
        fixed_amount: {amount: 2500, currency: 'inr'},
        display_name: 'Next day shipping',
        delivery_estimate: {
          minimum: {unit: 'business_day', value: 5},
          maximum: {unit: 'business_day', value: 7},
        },
      },
    }
  ],
    line_items:transformedItem ,
    mode: 'payment',
    success_url: 'http://localhost:3000/success',
    cancel_url: 'http://localhost:3000/cancel',
    metadata:{
      email:email,
      images:JSON.stringify(items.map(e=>e.img))
    }
  });
  // res.status(200)
  res.json({url: session.url})
});

app.listen(4242, () => console.log(`Listening on port ${4242}!`));