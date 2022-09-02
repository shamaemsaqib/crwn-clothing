import React from "react";

import "./cart-icon.styles.scss";

import { ReactComponent as Icon } from "../../assets/cart-icon.svg";

function CartIcon({ toggleCartDropdown, cartItemsCount }) {
  return (
    <div className="cart-icon-container" onClick={toggleCartDropdown}>
      <Icon className="icon" />
      <span className="quantity">{cartItemsCount}</span>
    </div>
  );
}

export default CartIcon;
