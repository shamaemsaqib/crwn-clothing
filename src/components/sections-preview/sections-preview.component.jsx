import React from "react";
import ItemCard from "../item-card/item-card.component";
import "./sections-preview.styles.scss";

function SectionsPreview({ title, items }) {
  return (
    <div className="sections-preview">
      <h2 className="title">{title.toUpperCase()}</h2>
      <div className="section-items-container">
        {items
          .filter((item, idx) => idx < 4)
          .map(({ id, ...otherItemProps }) => {
            return <ItemCard key={id} {...otherItemProps} />;
          })}
      </div>
    </div>
  );
}

export default SectionsPreview;
