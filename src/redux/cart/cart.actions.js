import { CART_ACTION_TYPES } from "./cart-action-types.actions";

export const toggleCartDropdown = () => {
  return {
    type: CART_ACTION_TYPES.TOGGLE_CART_DROPDOWN,
  };
};

export const addItemToCart = (item) => {
  return {
    type: CART_ACTION_TYPES.ADD_ITEM_TO_CART,
    payload: item,
  };
};

export const removeItemFromCart = (item) => {
  return {
    type: CART_ACTION_TYPES.REMOVE_ITEM_FROM_CART,
    payload: item,
  };
};

export const clearItemFromCart = (item) => {
  return {
    type: CART_ACTION_TYPES.CLEAR_ITEM_FROM_CART,
    payload: item,
  };
};
