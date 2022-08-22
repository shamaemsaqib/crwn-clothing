import React from "react";

import "./item-card.styles.scss";

import CustomButton from "../custom-button/custom-button.component";

function ItemCard({ name, imageUrl, price }) {
  return (
    <div className="item-card">
      <div
        className="item-card-img"
        style={{ backgroundImage: `url(${imageUrl})` }}
      ></div>
      <section className="item-card-info">
        <p className="info-name">{name.toUpperCase()}</p>
        <p className="info-price">{`$${price}`}</p>
      </section>
      <CustomButton type="button" inverted={true}>
        add to cart
      </CustomButton>
    </div>
  );
}

export default ItemCard;
