// http://localhost:8888/.netlify/functions/create-payment-intent
exports.handler = async function (event, context) {
  if (event.body) {
    const { cart, order_total, shipping_fee } = JSON.parse(event.body);
    console.log(cart, order_total, shipping_fee);
    return {
      statusCode: 200,
      body: JSON.stringify(cart),
    };
  } else {
    return {
      statusCode: 200,
      body: { msg: 'Create payment intent' },
    };
  }
};
