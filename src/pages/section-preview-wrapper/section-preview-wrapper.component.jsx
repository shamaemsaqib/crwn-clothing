import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import "./section-preview-wrapper.styles.scss";

import { selectSectionsForSectionsPreview } from "../../redux/shop/shop.selectors";
import SectionPreview from "../../components/section-preview/section-preview.component";

function SectionPreviewContainer({ sections }) {
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
});

export default connect(mapStateToProps)(SectionPreviewContainer);
