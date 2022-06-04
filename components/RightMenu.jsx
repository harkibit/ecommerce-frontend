import React from "react";

import { FiShoppingCart } from "react-icons/fi";
import styles from "../styles/Home.module.css";

export default function RightMenu() {
  return (
    <ul className={styles.rightMenu}>
      <li>
        <a href="#">Products</a>
      </li>
      <li>
        <a href="#">Sign In</a>
      </li>
      <li>
        <a href="#">
          <FiShoppingCart />
        </a>
      </li>
    </ul>
  );
}
