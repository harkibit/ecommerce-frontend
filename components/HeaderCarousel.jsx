import React from "react";
import Image from "next/Image";
import { Carousel } from "antd";
import styles from "../styles/Home.module.css";
import Button from "../common/Button";

const backgroundStyle = {
  // height: "700px",
  backgroundPosition: "center",
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
  padding: "50px",
  display: "flex",
  alignItems: "center",
};
const imageStyle = {
  width: "50%",
};
const image = {
  width: "100%",
  objectFit: "cover",
  borderRadius: "10px",
};
const contentStyle = {
  width: "50%",
  paddingRight: "50px",
};
const title = {
  fontSize: "72px",
};
const subtitle = {
  fontSize: "24px",
};

export default function HeaderCarousel() {
  return (
    <div style={backgroundStyle}>
      <div style={contentStyle}>
        <h1 style={title}>Sip pure-tasting</h1>
        <p style={subtitle}>
          Go beyond filtration with a unique multi-stage filtration and
          purification system for crisp drinking water.
        </p>
        <Button value="Learn More" />
      </div>
      <div style={imageStyle}>
        <Image
          src="/download.jpg"
          width={900}
          height={600}
          style={image}
          alt="best selling book"
        ></Image>
      </div>
    </div>
  );
}
