import React, { Component } from "react";
import SectionsPreview from "../../components/sections-preview/sections-preview.component";
import { shopData } from "../../data/utilities";
import "./shop.styles.scss";

export class Shop extends Component {
  constructor() {
    super();

    this.state = {
      shopData: shopData,
    };
  }
  render() {
    return (
      <div className="shop">
        <h1 className="title">COLLECTIONS</h1>
        {this.state.shopData.map(({ id, ...otherSectionsProps }) => {
          return <SectionsPreview key={id} {...otherSectionsProps} />;
        })}
      </div>
    );
  }
}

export default Shop;
