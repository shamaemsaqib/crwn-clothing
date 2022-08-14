import React, { Component } from "react";
import { sections } from "../../data/utilities.js";
import SectionItem from "../section-item/section-item.component.jsx";
import "./directory.styles.scss";

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
            <SectionItem
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
