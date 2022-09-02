import React from "react";
import StripeCheckout from "react-stripe-checkout";

import "./stripe.styles.scss";

import { stripeAPIKey, svgUrl } from "../../utilities/stripe.utilities";

function Stripe({ totalPrice }) {
  const priceInCents = totalPrice * 100;
  const onToken = (token) => {
    console.log(token);
    alert("Payment Successful!");
  };
  return (
    <StripeCheckout
      name="CRWN Clothing Ltd."
      description={`Your Total is $${totalPrice}`}
      image={svgUrl}
      label="Pay Now"
      panelLabel="Pay Now"
      amount={priceInCents}
      stripeKey={stripeAPIKey}
      shippingAddress
      billingAddress
      token={onToken}
    />
  );
}

export default Stripe;
