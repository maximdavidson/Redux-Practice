import type { Product } from "../../types/Product";
import styles from "./styles.module.css";

type ProductCardProps = {
  product: Product;
};

export const ProductCard = ({ product }: ProductCardProps) => {
  return (
    <div className={styles.card}>
      <h2 className={styles.title}>{product.name}</h2>
      <p className={styles.description}>{product.description}</p>
      <div className={styles.details}>
        <span className={styles.category}>{product.category}</span>
        <span className={styles.price}>${product.price.toFixed(2)}</span>
      </div>
    </div>
  );
};
