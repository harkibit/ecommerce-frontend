import React from "react";
import Image from "next/image";

import styles from "../styles/Home.module.css";

export default function ProductCard({ key, product }) {
  const BASE_URL = "http://localhost:1337/api";

  return (
    <div key={key} className={styles.productCard}>
      <Image
        alt={product.attributes.name}
        src={BASE_URL + product.attributes.image.data.attributes.url}
        width={100}
        height={100}
      />
      <span className={styles.productName}>{product.attributes.name}</span>
      <div className={styles.productCardBottom}>
        <span className={styles.productPrice}>${product.attributes.price}</span>
        <span className={styles.productPrice}>
          ${product.attributes.rating}
        </span>
      </div>
    </div>
  );
}
