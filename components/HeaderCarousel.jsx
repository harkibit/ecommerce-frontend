import React from "react";
import { Carousel } from "antd";
import styles from "../styles/Home.module.css";

const backgroundStyle = {
  backgroundImage:
    'linear-gradient(100deg, rgba(0,0,0,0.2), rgba(0,0,0,0.3)), url("/header.jpg")',
  height: "700px",
  backgroundPosition: "center",
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
  padding: "100px",
  display: "flex",
  alignItems: "center",
};
const contentStyle = {
  width: "50%",
  color: "white",
};
const title = {
  color: "white",
  fontSize: "72px",
};
const subtitle = {
  color: "white",
  fontSize: "24px",
};

export default function HeaderCarousel() {
  return (
    <div style={backgroundStyle}>
      <div style={contentStyle}>
        <h1 style={title}>Sip pure-tasting water as nature intended</h1>
        <p style={subtitle}>
          Go beyond filtration with a unique multi-stage filtration and
          purification system for crisp drinking water.
        </p>
        <button className={`${styles.btn} ${styles.btnPrimary}`}>
          Learn More
        </button>
      </div>
    </div>
  );
}
