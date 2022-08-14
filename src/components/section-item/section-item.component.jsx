import React from "react";
import "./section-item.styles.scss";

function SectionItem({ title, imageUrl, size }) {
  return (
    <div className={`section-item ${size}`}>
      <div
        className="section-item-img"
        style={{ backgroundImage: `url(${imageUrl})` }}
      ></div>
      <section className="section-item-content">
        <h2 className="content-title">{title.toUpperCase()}</h2>
        <p className="content-subtitle">{"shop now".toUpperCase()}</p>
      </section>
    </div>
  );
}

export default SectionItem;
