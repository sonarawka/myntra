const express = require('express');
const cors = require('cors');
const app = express();
const stripe = require('stripe')('sk_test_51MZHIfSIynhd8VcpEAe4dHhq3iSKXhZnlR4QMMOxgrmejLFlc6UX4Zv8RmnwFS0TLYZf6x60r0gUOvAQkUQ4J3JV00zhYbmHZN')

app.use(cors())
app.use(express.json())

app.use('./webhook', require('./webhook'))
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
    line_items:transformedItem ,
    mode: 'payment',
    success_url: 'http://localhost:3000/success',
    cancel_url: 'http://localhost:3000/cancel',
  });
  // res.status(200)
  res.json({url: session.url})
});

app.listen(4242, () => console.log(`Listening on port ${4242}!`));