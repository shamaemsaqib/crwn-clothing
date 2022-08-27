import React from "react";
import { useMatch } from "react-router-dom";
import { connect } from "react-redux";
import { compose } from "redux";

import "./section.styles.scss";

import { selectSection } from "../../redux/shop/shop.selectors";
import ItemCard from "../../components/item-card/item-card.component";

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

function withRouter(Component) {
  function SectionHOC(props) {
    const match = useMatch("/shop/:sectionID");
    return <Component match={match} {...props} />;
  }

  return SectionHOC;
}

const mapStateToProps = (state, { match }) => {
  return {
    section: selectSection(match.params.sectionID)(state),
  };
};

export default compose(withRouter, connect(mapStateToProps))(Section);
