import React from "react";
import { useNavigate } from "react-router-dom";

import "./section-card.styles.scss";

function SectionCard({ section }) {
  const { title, imageUrl, size, linkUrl } = section;
  const navigate = useNavigate();
  return (
    <div
      className={`section-card ${size}`}
      onClick={() => navigate(`${linkUrl}`)}
    >
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

// export default WithRouter(SectionCard);
export default SectionCard;
