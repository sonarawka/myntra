const express = require('express');
const router = express.Router();
const stripe = require('stripe')(process.env.STRIPE_PRIVATE_KEY)

router.post('/create-checkout-session', async (req, res) => {
  
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
      success_url: 'https://myntrav2.netlify.app/success',
      cancel_url: 'https://myntrav2.netlify.app/cancel',
      metadata:{
        email:email,
        images:JSON.stringify(items.map(e=>e.img)),
        desc:JSON.stringify(items.map(e=>e.desc.slice(0,40)))
  
  
      }
    });
    // res.status(200)
    res.json({url: session.url})
  });

module.exports=router;

  