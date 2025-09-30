import type { Product } from "../../types/Product";

export const FETCH_PRODUCTS_REQUEST = "FETCH_PRODUCTS_REQUEST" as const;
export const FETCH_PRODUCTS_SUCCESS = "FETCH_PRODUCTS_SUCCESS" as const;
export const FETCH_PRODUCTS_FAILURE = "FETCH_PRODUCTS_FAILURE" as const;
export const TOGGLE_CATEGORY = "TOGGLE_CATEGORY" as const;

export const fetchProductsRequest = () => ({
  type: FETCH_PRODUCTS_REQUEST,
});

export const fetchProductsSuccess = (products: Product[]) => ({
  type: FETCH_PRODUCTS_SUCCESS,
  payload: products,
});

export const fetchProductsFailure = (error: string) => ({
  type: FETCH_PRODUCTS_FAILURE,
  payload: error,
});

export const toggleCategory = (category: string) => ({
  type: TOGGLE_CATEGORY,
  payload: category,
});

export type ProductsAction =
  | ReturnType<typeof fetchProductsRequest>
  | ReturnType<typeof fetchProductsSuccess>
  | ReturnType<typeof fetchProductsFailure>
  | ReturnType<typeof toggleCategory>;
