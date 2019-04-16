import { combineReducers } from "redux";
import authReducer from "./errorReducers";
import errorReducer from "./authReducers";
export default combineReducers({
  auth: authReducer,
  errors: errorReducer
});