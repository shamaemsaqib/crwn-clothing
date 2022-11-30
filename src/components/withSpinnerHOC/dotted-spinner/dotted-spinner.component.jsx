import React from "react";

import "./dotted-spinner.styles.scss";

function DottedSpinner() {
  return (
    <div className="dotted-spinner-wrapper">
      <div className="lds-roller">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
}

export default DottedSpinner;
