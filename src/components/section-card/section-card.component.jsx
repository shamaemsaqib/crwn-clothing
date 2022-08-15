import React from "react";
import "./section-card.styles.scss";

function SectionCard({ title, imageUrl, size }) {
  return (
    <div className={`section-card ${size}`}>
      <div
        className="section-card-img"
        style={{ backgroundImage: `url(${imageUrl})` }}
      ></div>
      <section className="section-card-content">
        <h2 className="content-title">{title.toUpperCase()}</h2>
        <p className="content-subtitle">{"shop now".toUpperCase()}</p>
      </section>
    </div>
  );
}

export default SectionCard;
