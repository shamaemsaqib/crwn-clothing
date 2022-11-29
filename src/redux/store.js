import {
  legacy_createStore as createStore,
  applyMiddleware,
  compose,
} from "redux";
import logger from "redux-logger";
import { persistStore } from "redux-persist";
import thunk from "redux-thunk";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import { rootReducer } from "./rootReducer.reducer";

const middleWares = [thunk];

if (process.env.NODE_ENV !== "production") {
  middleWares.push(logger);
}

var enhancer = null;

//Adding redux devtools extension configuration
if (process.env.NODE_ENV !== "production" && window) {
  enhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__(
    applyMiddleware(...middleWares)
  );
} else {
  enhancer = compose(applyMiddleware(...middleWares));
}

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["cart"],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = createStore(persistedReducer, enhancer);

export const persistor = persistStore(store);
