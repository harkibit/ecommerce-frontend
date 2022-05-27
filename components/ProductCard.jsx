import React from "react";
import Image from "next/image";

import styles from "../styles/Home.module.css";

import { fromImageToURL } from "../utils/urls";

import { RiStarSFill } from "react-icons/ri";

export default function ProductCard({ key, product }) {
  return (
    <div key={key} className={styles.productCard}>
      <Image
        alt={product.attributes.name}
        src={fromImageToURL(product.attributes.image.data.attributes)}
        className={styles.productImage}
        width={200}
        height={200}
      />
      <div className={styles.productCardBody}>
        <span className={styles.productName}>{product.attributes.name}</span>
        <div className={styles.productCardBottom}>
          <span className={styles.productPrice}>
            ${product.attributes.price}
          </span>
          <span className={styles.productRating}>
            <RiStarSFill />
            {parseFloat(product.attributes.rating).toFixed(1)}
          </span>
        </div>
      </div>
    </div>
  );
}
