import React from "react";
import "./custom-button.styles.scss";

function CustomButton({
  children,
  isGoogleButton,
  inverted,
  ...otherBtnProps
}) {
  return (
    <button
      className={`${isGoogleButton ? "google-btn" : ""} ${
        inverted ? "inverted" : ""
      } custom-btn`}
      {...otherBtnProps}
    >
      {children.toUpperCase()}
    </button>
  );
}

export default CustomButton;
