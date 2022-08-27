import React from "react";
import { Link } from "react-router-dom";

import "./section-card.styles.scss";

function SectionCard({ section }) {
  const { title, imageUrl, size, linkUrl } = section;
  return (
    <Link to={`${linkUrl}`} className="section-card-link">
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
    </Link>
  );
}

export default SectionCard;
