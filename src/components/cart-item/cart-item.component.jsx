import React from "react";

import "./cart-item.styles.scss";

function CartItem({ item: { name, imageUrl, price, quantity } }) {
  return (
    <div className="cart-item-container">
      <img src={imageUrl} alt={name} />
      <div className="cart-item-details">
        <span className="cart-item-name">{name}</span>
        <span className="cart-item-price-quantity">
          {quantity}x{price}
        </span>
      </div>
    </div>
  );
}

export default CartItem;
