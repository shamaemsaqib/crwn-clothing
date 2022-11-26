import { combineReducers } from "redux";

import cartReducer from "./cart/cartReducer.reducer";
import { homeReducer } from "./home/homeReducer.reducer";
import { shopReducer } from "./shop/shopReducer.reducer";
import userReducer from "./user/userReducer.reducer";

export const rootReducer = combineReducers({
  user: userReducer,
  cart: cartReducer,
  home: homeReducer,
  shop: shopReducer,
});
