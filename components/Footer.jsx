import React from "react";
import styles from "../styles/Home.module.css";

import { BsYoutube } from "react-icons/bs";
import { RiTwitterFill } from "react-icons/ri";
import { AiFillInstagram } from "react-icons/ai";
import { IoLogoLinkedin } from "react-icons/io";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerGrid}>
        <div className={styles.footerCol}>
          <h3>Help</h3>
          <ul>
            <li>
              <a href="#">Frequently Asked Questions</a>
            </li>
            <li>
              <a href="#">Reviews</a>
            </li>
            <li>
              <a href="#">My Account</a>
            </li>
            <li>
              <a href="#">Contact Us</a>
            </li>
          </ul>
        </div>
        <div className={styles.footerCol}>
          <h3>Shop</h3>
          <ul>
            <li>
              <a href="#">LARQ Bottle PureVis™</a>
            </li>
            <li>
              <a href="#">Gift Sets</a>
            </li>
            <li>
              <a href="#">Travel Sleeve</a>
            </li>
            <li>
              <a href="#">Accessories</a>
            </li>
          </ul>
        </div>
        <div className={styles.footerCol}>
          <h3>About</h3>
          <ul>
            <li>
              <a href="#">Basq Magazine</a>
            </li>
            <li>
              <a href="#">Press</a>
            </li>
            <li>
              <a href="#">Our Story</a>
            </li>
            <li>
              <a href="#">Technology</a>
            </li>
          </ul>
        </div>
        <div className={styles.footerCol}>
          <h3>Sign up for our newsletter</h3>
          <div className={styles.footerNewsletter}>
            <input className={styles.input} placeholder="Enter your email" />
            <button
              className={`${styles.btn} ${styles.btnWhite} ${styles.btnSmall}`}
            >
              Subscribe
            </button>
          </div>
        </div>
      </div>

      <div className={styles.footerBottom}>
        <div>© 2022 LARQ. All Rights Reserved.</div>
        <div className={styles.footerSocialmedia}>
          <a href="#">
            <IoLogoLinkedin />
          </a>
          <a href="#">
            <AiFillInstagram />
          </a>
          <a href="#">
            <BsYoutube />
          </a>
          <a href="#">
            <RiTwitterFill />
          </a>
        </div>
        <div>
          <a href="#">Terms and Privacy</a>
        </div>
      </div>
    </footer>
  );
}
