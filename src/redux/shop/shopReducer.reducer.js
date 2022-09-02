import { SHOP_ACTION_TYPES } from "./shop-action-types.actions";

const INITIAL_STATE = {
  sections: null,
};

export const shopReducer = (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {
    case SHOP_ACTION_TYPES.UPDATE_SHOP_WITH_FIRESTORE_DATA:
      return {
        ...state,
        sections: payload,
      };
    default:
      return state;
  }
};
