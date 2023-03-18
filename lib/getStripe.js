import { loadStripe } from '@stripe/stripe-js';

let stripePromise;

const getStripe = () => {
  if(!stripePromise) {
    stripePromise = loadStripe('pk_test_51MmczDLWq9QWL8UwlBqYkkgUXxYJSiPTDLcrjIvcARLMrUIDcaoI4P7nUXzRQx2U3AQ31DOlEFx9luRVVici2kFq00KpFv8jY7');
  }

  return stripePromise;
}



// import { Elements } from '@stripe/react-stripe-js';
// import { loadStripe } from '@stripe/stripe-js';
// import { CheckoutForm } from '../pages/api/stripe';

// const stripePromise = loadStripe('pk_test_51MmczDLWq9QWL8UwlBqYkkgUXxYJSiPTDLcrjIvcARLMrUIDcaoI4P7nUXzRQx2U3AQ31DOlEFx9luRVVici2kFq00KpFv8jY7');

// export const getStripe = () => {
//     return (
//         <Elements stripe={stripePromise}>
//           <CheckoutForm />
//         </Elements>
//       );
//     };


    export default getStripe;