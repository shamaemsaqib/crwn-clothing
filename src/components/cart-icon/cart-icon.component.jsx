import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import "./cart-icon.styles.scss";

import { ReactComponent as Icon } from "../../assets/cart-icon.svg";
import { toggleCartDropdown } from "../../redux/cart/cart.actions";
import { selectCartItemsTotalCount } from "../../redux/cart/cart.selectors";

function CartIcon({ toggleCartDropdown, cartItemsCount }) {
  return (
    <div className="cart-icon-container" onClick={toggleCartDropdown}>
      <Icon className="icon" />
      <span className="quantity">{cartItemsCount}</span>
    </div>
  );
}

const mapDispatchToProps = (dispatch) => ({
  toggleCartDropdown: () => dispatch(toggleCartDropdown()),
});

const mapStateToProps = createStructuredSelector({
  cartItemsCount: selectCartItemsTotalCount,
});

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
