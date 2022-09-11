import React from "react";
import { useDispatch, useSelector } from "react-redux";

import "./cart-icon.styles.scss";

import { ReactComponent as Icon } from "../../assets/cart-icon.svg";

import { selectCartItemsTotalCount } from "../../redux/cart/cart.selectors";
import { toggleCartDropdown } from "../../redux/cart/cart.actions";

const CartIcon = () => {
  const cartItemsCount = useSelector(selectCartItemsTotalCount);
  const dispatch = useDispatch();

  return (
    <div
      className="cart-icon-container"
      onClick={() => dispatch(toggleCartDropdown())}
    >
      <Icon className="icon" />
      <span className="quantity">{cartItemsCount}</span>
    </div>
  );
};

export default CartIcon;
