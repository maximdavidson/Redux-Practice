import { call, put, takeEvery } from "redux-saga/effects";
import type { Product } from "../../types/Product";
import {
  fetchProductsFailure,
  fetchProductsSuccess,
} from "../actions/productsActions";

function fetchApi(): Promise<{ products: Product[] }> {
  return fetch("https://dummyjson.com/products").then((res) => res.json());
}

function* fetchProductsWorker(): Generator {
  try {
    const json: { products: Product[] } = yield call(fetchApi);
    const products: Product[] = json.products;
    yield put(fetchProductsSuccess(products));
  } catch (error) {
    yield put(
      fetchProductsFailure(
        error instanceof Error ? error.message : "Unknown error"
      )
    );
  }
}

export function* productsSaga() {
  yield takeEvery("FETCH_PRODUCTS_REQUEST", fetchProductsWorker);
}
