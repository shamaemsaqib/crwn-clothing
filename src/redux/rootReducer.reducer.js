import { combineReducers } from "redux";
import cartReducer from "./cart/cartReducer.reducer";
import userReducer from "./user/userReducer.reducer";

export default combineReducers({
  user: userReducer,
  cart: cartReducer,
});
