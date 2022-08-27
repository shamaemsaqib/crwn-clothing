import React from "react";
import { Link } from "react-router-dom";

import "./section-preview.styles.scss";

import ItemCard from "../item-card/item-card.component";

function SectionPreview(props) {
  console.log(props);
  const { title, items } = props;
  return (
    <div className="sections-preview">
      <Link to={`/shop/${title.toLowerCase()}`}>
        <h2 className="section-title">{title.toUpperCase()}</h2>
      </Link>
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

export default SectionPreview;
