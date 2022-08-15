import React from "react";
import "./item-card.styles.scss";

function ItemCard({ name, imageUrl, price }) {
  return (
    <div className="item-card">
      <div
        className="item-card-img"
        style={{ backgroundImage: `url(${imageUrl})` }}
      ></div>
      <section className="item-card-info">
        <p className="info-name">{name.toUpperCase()}</p>
        <p className="info-price">{price}</p>
      </section>
    </div>
  );
}

export default ItemCard;
