import React, { Component } from "react";

import "./directory.styles.scss";

import { sections } from "../../utilities/utilities.js";
import SectionCard from "../section-card/section-card.component.jsx";

export class Directory extends Component {
  constructor() {
    super();
    this.state = {
      sections: sections,
    };
  }
  render() {
    return (
      <div className="directory">
        {this.state.sections.map(({ title, imageUrl, id, size }) => {
          return (
            <SectionCard
              key={id}
              title={title}
              imageUrl={imageUrl}
              size={size}
            />
          );
        })}
      </div>
    );
  }
}

export default Directory;
