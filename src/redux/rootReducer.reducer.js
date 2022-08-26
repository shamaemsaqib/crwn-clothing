import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import cartReducer from "./cart/cartReducer.reducer";
import { homeReducer } from "./home/homeReducer.reducer";
import { shopReducer } from "./shop/shopReducer.reducer";
import userReducer from "./user/userReducer.reducer";

//TODO: nest route the shop page to pass category as url param
//TODO: create a new selector to get category data base off url param
//TODO: memoize the above selector using lodash.memoize

const rootReducer = combineReducers({
  user: userReducer,
  cart: cartReducer,
  home: homeReducer,
  shop: shopReducer,
});

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["cart"],
};

export default persistReducer(persistConfig, rootReducer);
