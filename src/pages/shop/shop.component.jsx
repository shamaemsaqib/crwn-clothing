import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import "./shop.styles.scss";

import SectionPreview from "../../components/section-preview/section-preview.component";
import { sectionsSelector } from "../../redux/shop/shop.selectors";

export function Shop({ sections }) {
  return (
    <div className="shop">
      {sections.map(({ id, ...otherSectionProps }) => {
        return <SectionPreview key={id} {...otherSectionProps} />;
      })}
    </div>
  );
}

const mapStateToProps = createStructuredSelector({
  sections: sectionsSelector,
});

export default connect(mapStateToProps)(Shop);
