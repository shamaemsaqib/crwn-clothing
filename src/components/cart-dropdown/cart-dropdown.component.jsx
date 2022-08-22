import React from "react";
import CustomButton from "../custom-button/custom-button.component";

import "./cart-dropdown.styles.scss";

function CartDropdown() {
  return (
    <div className="cart-dropdown-container">
      <div className="cart-items-container"></div>
      <CustomButton type="button">checkout</CustomButton>
    </div>
  );
}

export default CartDropdown;
