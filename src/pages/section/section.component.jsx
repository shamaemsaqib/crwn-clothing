import React from "react";

import "./section.styles.scss";

import ItemCard from "../../components/item-card/item-card.component";
class Section extends React.Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    const {
      section: { title, items },
    } = this.props;

    return (
      <div className="section-page-container">
        <h1 className="section-title">{title}</h1>
        <div className="section-page-items-container">
          {items.map((item) => (
            <ItemCard key={item.id} item={item} />
          ))}
        </div>
      </div>
    );
  }
}

export default Section;
