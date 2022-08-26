import { shopData } from "../../utilities/utilities";

const INITIAL_STATE = {
  sections: shopData,
};

export const shopReducer = (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {
    default:
      return state;
  }
};
