import React from "react";
import "./custom-button.styles.scss";

function CustomButton({ children, isGoogleButton, ...otherBtnProps }) {
  return (
    <button
      className={`${isGoogleButton ? "google-btn" : ""} custom-btn`}
      {...otherBtnProps}
    >
      {children.toUpperCase()}
    </button>
  );
}

export default CustomButton;
