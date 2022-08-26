import { sections } from "../../utilities/utilities";

const INITIAL_STATE = {
  sectionsList: sections,
};

export const homeReducer = (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {
    default:
      return state;
  }
};
