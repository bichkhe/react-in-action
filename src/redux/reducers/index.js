import loggerUserReducer from "./loggedUser";
import { combineReducers } from "redux";
const allReducers = combineReducers({
  loggerUser: loggerUserReducer,
});

export default allReducers;
