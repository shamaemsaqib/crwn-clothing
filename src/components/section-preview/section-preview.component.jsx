import React from "react";
import { useNavigate } from "react-router-dom";

import "./section-preview.styles.scss";

import ItemCard from "../item-card/item-card.component";

function SectionPreview({ title, items }) {
  const navigate = useNavigate();

  return (
    <div className="sections-preview">
      <h2
        className="section-title"
        onClick={() => navigate(`/shop/${title.toLowerCase()}`)}
      >
        {title.toUpperCase()}
      </h2>
      <div className="section-items-container">
        {items
          .filter((item, idx) => idx < 4)
          .map((item) => {
            return <ItemCard key={item.id} item={item} />;
          })}
      </div>
    </div>
  );
}

// export default withRouter(SectionPreview);
export default SectionPreview;
