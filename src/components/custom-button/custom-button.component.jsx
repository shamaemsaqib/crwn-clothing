import React from "react";

import "./custom-button.styles.scss";

function CustomButton({
  children,
  isGoogleButton,
  inverted,
  isLoading,
  ...otherBtnProps
}) {
  return (
    <button
      className={`${isGoogleButton ? "google-btn" : ""} ${
        inverted ? "inverted" : ""
      } ${isLoading ? "loading" : ""} custom-btn`}
      {...otherBtnProps}
    >
      {isLoading ? <div className="btn-spinner" /> : children.toUpperCase()}
    </button>
  );
}

export default CustomButton;
