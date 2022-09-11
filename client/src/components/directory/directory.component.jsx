import React from "react";
import { useSelector } from "react-redux";

import "./directory.styles.scss";

import SectionCard from "../section-card/section-card.component.jsx";

import { selectSectionsList } from "../../redux/home/home.selectors";

function Directory() {
  const sectionsList = useSelector(selectSectionsList);
  return (
    <div className="directory">
      {sectionsList.map((section) => {
        return <SectionCard key={section.id} section={section} />;
      })}
    </div>
  );
}

// const mapStateToProps = createStructuredSelector({
//   sectionsList: selectSectionsList,
// });

// export default connect(mapStateToProps)(Directory);

export default Directory;
