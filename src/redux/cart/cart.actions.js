import { CART_ACTION_TYPES } from "./cart-action-types.actions";

export const toggleCartDropdown = () => {
  return {
    type: CART_ACTION_TYPES.TOGGLE_CART_DROPDOWN,
  };
};
