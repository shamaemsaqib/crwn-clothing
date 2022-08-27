import React from "react";
import { Outlet } from "react-router-dom";

import "./shop.styles.scss";

export function Shop() {
  return (
    <div className="shop">
      <Outlet />
    </div>
  );
}

export default Shop;
