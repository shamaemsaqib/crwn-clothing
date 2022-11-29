import React from "react";
import StripeCheckout from "react-stripe-checkout";
import axios from "axios";

import "./stripe.styles.scss";

import { stripeAPIKey, svgUrl } from "../../utilities/stripe.utilities";

function Stripe({ totalPrice }) {
  const priceInCents = totalPrice * 100;
  const onToken = (token) => {
    axios
      .post("payment", {
        amount: priceInCents,
        token,
      })
      .then((res) => alert("Payment Successful"))
      .catch((error) => {
        console.error("Payment Unsuccessful", error);
        alert(
          "ERROR: Payment Unsuccessful\nMake sure you use the given credit card for payment"
        );
      });
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
