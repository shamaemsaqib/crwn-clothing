import { connect } from "react-redux";
import { compose } from "redux";

import WithRouter from "../../components/withRouterHOC/withRouterHOC.component";
import WithSpinnerHOC from "../../components/withSpinnerHOC/withSpinnerHOC.component";
import Section from "./section.component";

import {
  selectIsSectionsLoaded,
  selectSection,
} from "../../redux/shop/shop.selectors";

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

const SectionContainer = compose(
  WithRouter,
  connect(mapStateToProps),
  WithSpinnerHOC
)(Section);

export default SectionContainer;
