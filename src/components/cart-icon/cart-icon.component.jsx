import React from "react";
import { connect } from "react-redux";

import "./cart-icon.styles.scss";

import { ReactComponent as Icon } from "../../assets/cart-icon.svg";
import { toggleCartDropdown } from "../../redux/cart/cart.actions";

function CartIcon({ toggleCartDropdown }) {
  return (
    <div className="cart-icon-container" onClick={toggleCartDropdown}>
      <Icon className="icon" />
      <span className="quantity">0</span>
    </div>
  );
}

const mapDispatchToProps = (dispatch) => ({
  toggleCartDropdown: () => dispatch(toggleCartDropdown()),
});

export default connect(null, mapDispatchToProps)(CartIcon);
