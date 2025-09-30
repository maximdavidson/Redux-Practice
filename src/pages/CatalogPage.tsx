import { useEffect } from "react";
import { FiltersPanel } from "../components/FiltersPanel";
import { ProductCard } from "../components/ProductCard";
import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "../store";
import {
  fetchProductsRequest,
  toggleCategory,
} from "../store/actions/productsActions";

export const CatalogPage = () => {
  const { products, categories, selected, loading, error } = useSelector(
    (state: RootState) => state.products
  );

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProductsRequest());
  }, [dispatch]);

  const handleToggle = (category: string) => {
    dispatch(toggleCategory(category));
  };

  const filtered =
    selected.length === 0
      ? products
      : products.filter((p) => selected.includes(p.category));

  return (
    <div>
      <FiltersPanel
        categories={categories}
        selected={selected}
        onToggle={handleToggle}
      />

      <div>
        {loading && <p>Loading...</p>}
        {error && <p>{error}</p>}

        {filtered.length === 0 && !loading ? (
          <p>Товаров не найдено</p>
        ) : (
          <div>
            {filtered.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
