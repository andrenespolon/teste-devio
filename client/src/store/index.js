import { createStore, applyMiddleware, compose } from "redux";
import creatSagaMiddleware from "redux-saga";

import rootReducers from "./modules/rootReducers";
import rootSagas from "./modules/rootSagas";

const sagaMiddleware = creatSagaMiddleware();

const store = createStore(
  rootReducers,
  compose(
    applyMiddleware(sagaMiddleware),
    window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

sagaMiddleware.run(rootSagas);

export default store;
