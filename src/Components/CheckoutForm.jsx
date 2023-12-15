import { useEffect } from "react";
import { useState } from "react";
import {loadStripe} from '@stripe/stripe-js';
import {
  EmbeddedCheckoutProvider,
  EmbeddedCheckout
} from '@stripe/react-stripe-js';

const stripePromise = loadStripe("pk_test_51NkTOXHGPrfYJoPuOg0oKfft9u1JLEHY3WxZc6Mcg0aZ1K3dApKIgBmoHtR9nktKPn8in1KFLacTWKuZ4RbIxUOT00cpGDi9mt");

const CheckoutForm = () => {
  const [clientSecret, setClientSecret] = useState('');

  useEffect(() => {
    console.log("in use effect")
    
    fetch("http://localhost:3000/orders/36/create_checkout_session", {
      method: "POST",
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error(`HTTP error! Status: ${res.status}`);
        }
        return res.json();
      })
      .then((data) => {
        console.log('data: ', data);
        setClientSecret(data.clientSecret);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);

  return (
    <div id="checkout" className="max-w-2xl max-h-2xl">
      {clientSecret && (
        <EmbeddedCheckoutProvider
          stripe={stripePromise}
          options={{clientSecret}}
        >
          <EmbeddedCheckout />
        </EmbeddedCheckoutProvider>
      )}
    </div>
  )
}

export { CheckoutForm }
