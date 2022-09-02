import { SHOP_ACTION_TYPES } from "./shop-action-types.actions";

const INITIAL_STATE = {
  sections: null,
  isFetching: false,
  errorMsg: "",
};

export const shopReducer = (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {
    case SHOP_ACTION_TYPES.FETCH_SECTIONS_FROM_FIRESTORE_START:
      return {
        ...state,
        isFetching: true,
      };
    case SHOP_ACTION_TYPES.FETCH_SECTIONS_FROM_FIRESTORE_SUCCESS:
      return {
        ...state,
        isFetching: false,
        sections: payload,
      };
    case SHOP_ACTION_TYPES.FETCH_SECTIONS_FROM_FIRESTORE_FAILURE:
      return {
        ...state,
        isFetching: false,
        errorMsg: payload,
      };
    default:
      return state;
  }
};
