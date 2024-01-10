const express = require("express")
const Stripe = require("stripe")

const stripe = Stripe(process.env.Stripe_Key)

const router = express.Router()

router.post('/create-checkout-session', async (req, res) => {
  console.log(req.body)
    const session = await stripe.checkout.sessions.create({
      line_items: [
        {
          price_data: {
            currency: 'usd',
            product_data: {
              name: req.body.vehicle,
              description: req.body.desc,
              // images: [req.body.image]
            },
            unit_amount: req.body.completeCost*100,
          },
          quantity: 1,
        },
      ],
      mode: 'payment',
    success_url: 'http://localhost:3000/',
    cancel_url: 'http://localhost:3000/',
      
    });
  
    // res.redirect(303, session.url);
    res.send({ url: session.url })
  });


module.exports = router;


