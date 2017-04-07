import {combineReducers} from "redux";
import {reducer as formReducer} from "redux-form";
import {feed} from "./feed";

export const rootReducer = combineReducers({
  feed,
  form: formReducer,
});
