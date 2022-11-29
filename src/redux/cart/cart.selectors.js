import { createSelector } from "reselect";

const selectCart = (state) => state.cart;

export const selectCartDropdown = createSelector(
  [selectCart],
  (cart) => cart.cartDropdownHidden
);

export const selectCartItems = createSelector(
  [selectCart],
  (cart) => cart.items
);

export const selectCartItemsTotalCount = createSelector(
  [selectCartItems],
  (cartItems) =>
    cartItems.reduce(
      (totalCount, cartItem) => totalCount + cartItem.quantity,
      0
    )
);

export const selectCheckoutTotal = createSelector(
  [selectCartItems],
  (cartItems) =>
    cartItems.reduce(
      (checkoutTotal, item) => checkoutTotal + item.price * item.quantity,
      0
    )
);
