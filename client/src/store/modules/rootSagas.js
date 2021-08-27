import { all } from "redux-saga/effects";

import checkout from "./checkout/saga";
import kitchen from "./kitchen/saga";

export default function* rootSagas() {
  return yield all([checkout, kitchen]);
}
