import { createSelector } from "reselect";

const selectShop = (state) => state.shop;

export const selectSections = createSelector(
  [selectShop],
  (shop) => shop.sections
);

//Sections is an object so converting into an array to map over it
export const selectSectionsForSectionsPreview = createSelector(
  [selectSections],
  (sections) =>
    sections ? Object.keys(sections).map((section) => sections[section]) : []
);

export const selectSection = (sectionID) =>
  createSelector([selectSections], (sections) =>
    sections ? sections[sectionID] : null
  );

export const selectIsSectionsLoaded = createSelector(
  [selectShop],
  (shop) => !!shop.sections
);

export const selectIsFetching = createSelector(
  [selectShop],
  (shop) => shop.isFetching
);
