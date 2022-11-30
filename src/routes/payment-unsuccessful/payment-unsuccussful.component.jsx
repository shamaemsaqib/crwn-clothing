import React from "react";

import "./payment-unsuccessful.styles.scss";

const PaymentUnsuccessful = () => {
  return (
    <div className="unsuccessful-card">
      <div>
        <i className="cross">❌</i>
      </div>
      <h1>Failure</h1>
      <p>
        We are sorry, we could not complete the purchase;
        <br /> try again later!
      </p>
    </div>
  );
};

export default PaymentUnsuccessful;
