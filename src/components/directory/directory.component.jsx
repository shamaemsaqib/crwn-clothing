import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import "./directory.styles.scss";

import SectionCard from "../section-card/section-card.component.jsx";
import { selectSectionsList } from "../../redux/home/home.selectors";

export function Directory({ sectionsList }) {
  return (
    <div className="directory">
      {sectionsList.map(({ title, imageUrl, id, size }) => {
        return (
          <SectionCard key={id} title={title} imageUrl={imageUrl} size={size} />
        );
      })}
    </div>
  );
}

const mapStateToProps = createStructuredSelector({
  sectionsList: selectSectionsList,
});

export default connect(mapStateToProps)(Directory);
