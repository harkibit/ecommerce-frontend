import React from "react";
import Image from "next/image";
import Link from "next/link";

import styles from "../styles/Home.module.css";

import { fromImageToURL } from "../utils/urls";
import { formatDecimals } from "../utils/format";

import { RiStarSFill } from "react-icons/ri";

export default function ProductCard({ key, product }) {
  return (
    <Link href={`/products/${product.attributes.slug}`}>
      <a>
        <div key={key} className={styles.productCard}>
          <Image
            alt={product.attributes.name}
            src={fromImageToURL(product?.attributes.image.data?.attributes)}
            className={styles.productImage}
            width={200}
            height={300}
          />
          <div className={styles.productCardBody}>
            <span className={styles.productName}>
              {product.attributes.name}
            </span>
            <div className={styles.productCardBottom}>
              <span className={styles.productPrice}>
                ${formatDecimals(product.attributes.price, 2)}
              </span>
              <span className={styles.productRating}>
                <RiStarSFill />
                {formatDecimals(product.attributes.rating, 1)}
              </span>
            </div>
          </div>
        </div>
      </a>
    </Link>
  );
}
