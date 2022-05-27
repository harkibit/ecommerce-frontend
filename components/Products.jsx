import React from "react";
import styles from "../styles/Home.module.css";
import ProductCard from "./ProductCard";

export default function Products({ products }) {
  return (
    <div className={styles.productsGrid}>
      {products &&
        products.data.map((product) => {
          return <ProductCard key={product.id} product={product} />;
        })}
    </div>
  );
}
