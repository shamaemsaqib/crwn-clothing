import { combineReducers } from "redux";
import userReducer from "./user/userReducer.reducer";

export default combineReducers({
  user: userReducer,
});
