import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import "./section.styles.scss";

import ItemCard from "../../components/item-card/item-card.component";
import { selectSection } from "../../redux/shop/shop.selectors";

const Section = () => {
  const { sectionID } = useParams();

  const section = useSelector((state) => selectSection(state, sectionID));

  const { title, items } = section;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="section-page-container">
      <h1 className="section-title">{title}</h1>
      <div className="section-page-items-container">
        {items.map((item) => (
          <ItemCard key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default Section;
