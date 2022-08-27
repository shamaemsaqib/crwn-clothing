import React from "react";
import { connect } from "react-redux";
import { compose } from "redux";

import "./section.styles.scss";

import { selectSection } from "../../redux/shop/shop.selectors";
import ItemCard from "../../components/item-card/item-card.component";
import withRouter from "../../components/withRouterHOC/withRouterHOC.component";

function Section({ section: { title, items } }) {
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
}

const mapStateToProps = (
  state,
  {
    match: {
      params: { sectionID },
    },
  }
) => {
  return {
    section: selectSection(sectionID)(state),
  };
};

export default compose(withRouter, connect(mapStateToProps))(Section);
