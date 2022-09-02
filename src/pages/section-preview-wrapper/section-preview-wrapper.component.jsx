import React from "react";

import "./section-preview-wrapper.styles.scss";

import SectionPreview from "../../components/section-preview/section-preview.component";

function SectionPreviewWrapper({ sections }) {
  return (
    <div className="section-preview-container">
      {sections.map(({ id, ...otherSectionProps }) => {
        return <SectionPreview key={id} {...otherSectionProps} />;
      })}
    </div>
  );
}

export default SectionPreviewWrapper;
