import React from "react";

import "./checkout-item.styles.scss";

function CheckoutItem({ item }) {
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
        <span className="arrow">&#10094;</span>
        <span>{quantity}</span>
        <span className="arrow">&#10095;</span>
      </div>
      <div className="item-price">
        <span>${price}</span>
      </div>
      <div className="item-remove">
        <button>&#10005;</button>
      </div>
    </div>
  );
}

export default CheckoutItem;
