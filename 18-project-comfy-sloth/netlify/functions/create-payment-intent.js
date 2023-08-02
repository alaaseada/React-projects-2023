// http://localhost:8888/.netlify/functions/create-payment-intent
require('dotenv').config();
const stripe = require('stripe')(process.env.VITE_STRIPE_API_SECRET_KEY);

exports.handler = async function (event, context) {
  if (event.body) {
    const { cart, order_total, shipping_fee } = JSON.parse(event.body);
    const calculateOrderAmount = () => {
      return shipping_fee + order_total;
    };
    try {
      const paymentIntent = await stripe.paymentIntents.create({
        amount: calculateOrderAmount(),
        currency: 'usd',
      });
      return {
        statusCode: 200,
        body: JSON.stringify({ clientSecret: paymentIntent.client_secret }),
      };
    } catch (error) {
      return {
        statusCode: 500,
        body: JSON.stringify({ msg: `An error occurred + ${error.message}` }),
      };
    }
  } else {
    return {
      statusCode: 200,
      body: { msg: 'Create payment intent' },
    };
  }
};
