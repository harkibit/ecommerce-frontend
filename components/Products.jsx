import React, { useEffect } from "react";
import styles from "../styles/Home.module.css";
import ProductCard from "./ProductCard";
import Link from "next/link";

export default function Products({ products, maxArray }) {
  return (
    <div className={styles.productsGrid}>
      {products &&
        products.data.slice(0, maxArray).map((product) => {
          return (
            <Link href={`/products/${product.id}`} key={product.id}>
              <ProductCard product={product} />
            </Link>
          );
        })}
    </div>
  );
}
