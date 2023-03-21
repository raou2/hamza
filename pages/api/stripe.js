import Stripe from 'stripe';

const stripe = new Stripe('sk_test_51MmczDLWq9QWL8UwcL0OAjgnT7NlNo0HliXXxpqfCqU7y9zqxCgbzgVhlijyYGtvUJOU5T7x6u2Das5Y04bRccXC007WhNnS20');

export default async function handler(req, res) {
  if (req.method === 'POST') {
    try {
      const params = {
        submit_type: 'pay',
        mode: 'payment',
        payment_method_types: ['card'],
        billing_address_collection: 'required',
        line_items: req.body.map((item) => {
          const img = item.image[0].asset._ref;
          const newImage = img.replace('image-', 'https://cdn.sanity.io/images/w67ih30x/production/').replace('-webp', '.webp');

          return {
            price_data: { 
              currency: 'dzd',
              product_data: { 
                name: item.name,
                images: [newImage],
              },
              unit_amount: item.price * 100,
            },
            quantity: item.quantity
          }
        }),
        success_url: `${req.headers.origin}/success`,
        cancel_url: `${req.headers.origin}/canceled`,
        payment_intent_data: {
          metadata: {
            // Add metadata here if needed.
          },
        },
      };

      // Get the values from your custom input fields.
      const phone = req.body.phone;
      const email = req.body.email;
      const city = req.body.city;

      // Add the custom input fields to the billing address collection.
      params.billing_address_collection = {
        phone: phone,
        email: email,
        address: {
          city: city,
        },
      };

      // Create Checkout Sessions from body params.
      const session = await stripe.checkout.sessions.create(params);

      res.status(200).json(session);
    } catch (err) {
      res.status(err.statusCode || 500).json(err.message);
    }
  } else {
    res.setHeader('Allow', 'POST');
    res.status(405).end('Method Not Allowed');
  }
}
