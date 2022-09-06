import { connect } from "react-redux";
import { compose } from "redux";
import { createStructuredSelector } from "reselect";

import SectionPreviewWrapper from "./section-preview-wrapper.component";
import WithSpinnerHOC from "../../components/withSpinnerHOC/withSpinnerHOC.component";

import { selectIsFetching } from "../../redux/shop/shop.selectors";

//Old HOC Syntax
// const mapStateToProps = createStructuredSelector({
//   sections: selectSectionsForSectionsPreview,
//   isLoading: selectIsFetching,
// });

const mapStateToProps = createStructuredSelector({
  isLoading: selectIsFetching,
});

const SectionPreviewWrapperContainer = compose(
  connect(mapStateToProps),
  WithSpinnerHOC
)(SectionPreviewWrapper);

export default SectionPreviewWrapperContainer;
