import { connect } from "react-redux";
import { compose } from "redux";

import WithSpinnerHOC from "../../components/withSpinnerHOC/withSpinnerHOC.component";
import Section from "./section.component";

import { selectIsSectionsLoaded } from "../../redux/shop/shop.selectors";

// Old HOC Syntax
// const mapStateToProps = (
//   state,
//   {
//     match: {
//       params: { sectionID },
//     },
//   }
// ) => {
//   return {
//     section: selectSection(state, sectionID),
//     isLoading: !selectIsSectionsLoaded(state),
//   };
// };

// const SectionContainer = compose(
//   WithRouter,
//   connect(mapStateToProps),
//   WithSpinnerHOC
// )(Section);

const mapStateToProps = (state) => {
  return {
    isLoading: !selectIsSectionsLoaded(state),
  };
};

const SectionContainer = compose(
  connect(mapStateToProps),
  WithSpinnerHOC
)(Section);

export default SectionContainer;
