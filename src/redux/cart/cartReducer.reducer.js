import { CART_ACTION_TYPES } from "./cart-action-types.actions";

const INITIAL_STATE = {
  cartDropdownHidden: true,
  items: [],
};

const cartReducer = (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {
    case CART_ACTION_TYPES.TOGGLE_CART_DROPDOWN:
      return {
        ...state,
        cartDropdownHidden: !state.cartDropdownHidden,
      };
    case CART_ACTION_TYPES.ADD_ITEM_TO_CART:
      return {
        ...state,
        items: [...state.items, payload],
      };
    default:
      return state;
  }
};

export default cartReducer;
