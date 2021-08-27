import { combineReducers } from "redux";

import products from "./products/reducer";
import checkout from "./checkout/reducer";
import kitchen from "./kitchen/reducer";

export default combineReducers({
  products,
  checkout,
  kitchen,
});
