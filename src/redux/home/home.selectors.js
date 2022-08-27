import { createSelector } from "reselect";

const selectHome = (state) => state.home;

export const selectSectionsList = createSelector(
  [selectHome],
  (home) => home.sectionsList
);
