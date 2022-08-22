import { CART_ACTION_TYPES } from "./cart-action-types.actions";

const INITIAL_STATE = {
  cartDropdownHidden: true,
};

const cartReducer = (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {
    case CART_ACTION_TYPES.TOGGLE_CART_DROPDOWN:
      return {
        ...state,
        cartDropdownHidden: !state.cartDropdownHidden,
      };
    default:
      return state;
  }
};

export default cartReducer;
