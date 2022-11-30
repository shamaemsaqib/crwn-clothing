import React from "react";

import "./payment-successful.styles.scss";

const PaymentSuccessful = () => {
  return (
    <div className="successful-card">
      <div>
        <i className="checkmark">✓</i>
      </div>
      <h1>Success</h1>
      <p>
        We received your purchase request;
        <br /> we'll be in touch shortly!
      </p>
    </div>
  );
};

export default PaymentSuccessful;
