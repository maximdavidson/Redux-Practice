import { applyMiddleware, combineReducers, createStore } from "redux";
import createSagaMiddleware from "redux-saga";
import { all } from "redux-saga/effects";
import { productsReducer } from "./reducers/productReducer";
import { productsSaga } from "./sagas/productsSaga";
import storage from "redux-persist/lib/storage";
import { persistReducer, persistStore } from "redux-persist";
import type { PersistConfig } from "redux-persist";

const rootReducer = combineReducers({
  products: productsReducer,
});

type RootState = ReturnType<typeof rootReducer>;

const persistConfig: PersistConfig<RootState> = {
  key: "root",
  storage,
  whitelist: ["products"],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

function* rootSaga() {
  yield all([productsSaga()]);
}

const sagaMiddleware = createSagaMiddleware();

const store = createStore(persistedReducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rootSaga);

export const persistor = persistStore(store);
export type { RootState };
export default store;
