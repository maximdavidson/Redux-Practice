import type { Product } from "../../types/Product";
import {
  FETCH_PRODUCTS_REQUEST,
  FETCH_PRODUCTS_SUCCESS,
  FETCH_PRODUCTS_FAILURE,
  TOGGLE_CATEGORY,
  type ProductsAction,
} from "../actions/productsActions";

type ProductsState = {
  products: Product[];
  categories: string[];
  selected: string[];
  loading: boolean;
  error: string | null;
};

const initialState: ProductsState = {
  products: [],
  categories: [],
  selected: [],
  loading: false,
  error: null,
};

export const productsReducer = (
  state = initialState,
  action: ProductsAction
): ProductsState => {
  switch (action.type) {
    case FETCH_PRODUCTS_REQUEST:
      return { ...state, loading: true, error: null };
    case FETCH_PRODUCTS_SUCCESS: {
      const products = action.payload;
      const categories = Array.from(new Set(products.map((p) => p.category)));
      return { ...state, loading: false, products, categories };
    }
    case FETCH_PRODUCTS_FAILURE:
      return { ...state, loading: false, error: action.payload };
    case TOGGLE_CATEGORY: {
      const category = action.payload;
      const selected = state.selected.includes(category)
        ? state.selected.filter((c) => c !== category)
        : [...state.selected, category];
      return { ...state, selected };
    }
    default:
      return state;
  }
};
