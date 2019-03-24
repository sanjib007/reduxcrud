import { combineReducers } from "redux";
import newsReducer from "./newsReducer";
import country from "./countryReducer";
import category from "./categoryReducer";

export default combineReducers({
  news: newsReducer,
  allCountry: country,
  allCategory: category
});
