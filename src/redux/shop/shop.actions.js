import { SHOP_ACTION_TYPES } from "./shop-action-types.actions";

export const updateShopWithFirestoreData = (sections) => ({
  type: SHOP_ACTION_TYPES.UPDATE_SHOP_WITH_FIRESTORE_DATA,
  payload: sections,
});
