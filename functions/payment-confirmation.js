const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

exports.handler = async (event, context) => {
  const { payment_intent_id } = event.queryStringParameters;

  if (!payment_intent_id) {
    return {
      statusCode: 400,
      body: JSON.stringify({ error: 'Payment intent ID is required' })
    };
  }

  try {
    const paymentIntent = await stripe.paymentIntents.retrieve(payment_intent_id);
    
    return {
      statusCode: 200,
      body: JSON.stringify({
        id: paymentIntent.id,
        amount: paymentIntent.amount,
        created: paymentIntent.created,
        currency: paymentIntent.currency,
        status: paymentIntent.status,
        payment_method_details: paymentIntent.charges?.data[0]?.payment_method_details,
        metadata: paymentIntent.metadata
      })
    };
  } catch (error) {
    console.error('Error retrieving payment intent:', error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Failed to retrieve payment details' })
    };
  }
};
