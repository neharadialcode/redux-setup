import { combineReducers } from "redux";
import FirstReducrCase from "./reducer/FirstReducer";
import SecondReducerCase from "./reducer/SecondReducer";
import ThirdReducerCase from "./reducer/ThirdReducer";

export const rootReducer = combineReducers({
  FirstReducrCase,
  SecondReducerCase,
  ThirdReducerCase,
});
