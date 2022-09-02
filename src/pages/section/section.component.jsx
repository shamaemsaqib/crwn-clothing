import React from "react";
import { connect } from "react-redux";
import { compose } from "redux";

import "./section.styles.scss";

import {
  selectIsSectionsLoaded,
  selectSection,
} from "../../redux/shop/shop.selectors";
import ItemCard from "../../components/item-card/item-card.component";
import withRouter from "../../components/withRouterHOC/withRouterHOC.component";
import WithSpinnerHOC from "../../components/withSpinnerHOC/withSpinnerHOC.component";

class Section extends React.Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    const {
      section: { title, items },
    } = this.props;

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
    isLoading: !selectIsSectionsLoaded(state),
  };
};

export default compose(
  withRouter,
  connect(mapStateToProps),
  WithSpinnerHOC
)(Section);
