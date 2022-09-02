import React from "react";

import Spinner from "./spinner/spinner.component.jsx";

function WithSpinnerHOC(WrappedComponent) {
  function WithSpinner({ isLoading, ...otherProps }) {
    return isLoading ? <Spinner /> : <WrappedComponent {...otherProps} />;
  }

  return WithSpinner;
}

export default WithSpinnerHOC;
