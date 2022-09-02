import React from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import { createStructuredSelector } from "reselect";

import "./section-preview-wrapper.styles.scss";

import {
  selectIsFetching,
  selectSectionsForSectionsPreview,
} from "../../redux/shop/shop.selectors";
import SectionPreview from "../../components/section-preview/section-preview.component";
import WithSpinnerHOC from "../../components/withSpinnerHOC/withSpinnerHOC.component";

function SectionPreviewWrapper({ sections }) {
  return (
    <div className="section-preview-container">
      {sections.map(({ id, ...otherSectionProps }) => {
        return <SectionPreview key={id} {...otherSectionProps} />;
      })}
    </div>
  );
}

const mapStateToProps = createStructuredSelector({
  sections: selectSectionsForSectionsPreview,
  isLoading: selectIsFetching,
});

export default compose(
  connect(mapStateToProps),
  WithSpinnerHOC
)(SectionPreviewWrapper);
