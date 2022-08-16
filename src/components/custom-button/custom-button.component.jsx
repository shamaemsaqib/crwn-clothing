import React from "react";
import "./custom-button.styles.scss";

function CustomButton({ children, type }) {
  return (
    <button className="custom-btn" type={type}>
      {children.toUpperCase()}
    </button>
  );
}

export default CustomButton;
