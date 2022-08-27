import { createSelector } from "reselect";

const selectShop = (state) => state.shop;

export const selectSections = createSelector(
  [selectShop],
  (shop) => shop.sections
);

const MAP_SECTION_ID = {
  hats: 1,
  sneakers: 2,
  jackets: 3,
  women: 4,
  men: 5,
};

export const selectSection = (sectionID) =>
  createSelector([selectSections], (sections) =>
    sections.find((section) => section.id === MAP_SECTION_ID[sectionID])
  );
