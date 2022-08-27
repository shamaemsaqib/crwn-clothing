import React from "react";

import "./section-preview.styles.scss";

import ItemCard from "../item-card/item-card.component";
import withRouter from "../withRouterHOC/withRouterHOC.component";

function SectionPreview({ title, items, navigate }) {
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

export default withRouter(SectionPreview);
