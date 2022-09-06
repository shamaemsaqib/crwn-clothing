import React from "react";
import { useSelector } from "react-redux";

import "./section-preview-wrapper.styles.scss";

import SectionPreview from "../../components/section-preview/section-preview.component";

import { selectSectionsForSectionsPreview } from "../../redux/shop/shop.selectors";

const SectionPreviewWrapper = () => {
  const sections = useSelector(selectSectionsForSectionsPreview);

  return (
    <div className="section-preview-container">
      {sections.map(({ id, ...otherSectionProps }) => {
        return <SectionPreview key={id} {...otherSectionProps} />;
      })}
    </div>
  );
};

export default SectionPreviewWrapper;
