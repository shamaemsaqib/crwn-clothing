import React from "react";
import { connect } from "react-redux";
import {
  addItemToCart,
  clearItemFromCart,
  remoteItemFromCart,
} from "../../redux/cart/cart.actions";

import "./checkout-item.styles.scss";

function CheckoutItem({
  item,
  removeItemFromCart,
  addItemToCart,
  clearItemFromCart,
}) {
  const { name, imageUrl, quantity, price } = item;
  return (
    <div className="checkout-item-container">
      <div className="item-img-container">
        <img src={imageUrl} alt={name} className="item-img" />
      </div>
      <div className="item-name">
        <span>{name}</span>
      </div>
      <div className="item-quantity">
        <button className="arrow" onClick={() => removeItemFromCart(item)}>
          &#10094;
        </button>
        <span>{quantity}</span>
        <button className="arrow" onClick={() => addItemToCart(item)}>
          &#10095;
        </button>
      </div>
      <div className="item-price">
        <span>${price}</span>
      </div>
      <div className="item-remove">
        <button onClick={() => clearItemFromCart(item)}>&#10005;</button>
      </div>
    </div>
  );
}

const mapDispatchToProps = (dispatch) => ({
  removeItemFromCart: (item) => dispatch(remoteItemFromCart(item)),
  addItemToCart: (item) => dispatch(addItemToCart(item)),
  clearItemFromCart: (item) => dispatch(clearItemFromCart(item)),
});

export default connect(null, mapDispatchToProps)(CheckoutItem);
