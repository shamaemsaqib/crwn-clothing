import React from "react";

import DottedSpinner from "./dotted-spinner/dotted-spinner.component.jsx";

function WithSpinnerHOC(WrappedComponent) {
  function WithSpinner({ isLoading, ...otherProps }) {
    return isLoading ? <DottedSpinner /> : <WrappedComponent {...otherProps} />;
  }

  return WithSpinner;
}

export default WithSpinnerHOC;
