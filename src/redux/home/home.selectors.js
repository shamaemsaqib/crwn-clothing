import { createSelector } from "reselect";

const homeSelector = (state) => state.home;

export const sectionsListSelector = createSelector(
  [homeSelector],
  (home) => home.sectionsList
);
