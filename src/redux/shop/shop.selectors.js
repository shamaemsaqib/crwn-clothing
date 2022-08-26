import { createSelector } from "reselect";

const shopSelector = (state) => state.shop;

export const sectionsSelector = createSelector(
  [shopSelector],
  (shop) => shop.sections
);
