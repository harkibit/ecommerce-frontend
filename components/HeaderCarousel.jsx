import React from "react";
import { Carousel } from "antd";
import { slider1 } from "../public/images/slider1.png";

const backgroundStyle = {
  backgroundImage: `url${slider1}`,
  width: "100%",
  height: "100%",
  backgroundPosition: "center",
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
};
const contentStyle = {
  height: "400px",
  color: "#fff",
  lineHeight: "160px",
  textAlign: "center",
  background: "#364d79",
};

export default function HeaderCarousel() {
  return (
    <Carousel dotPosition="right" effect="scrollx">
      <div style={backgroundStyle}>
        <h3 style={contentStyle}>1</h3>
      </div>
      <div style={backgroundStyle}>
        <h3 style={contentStyle}>2</h3>
      </div>
    </Carousel>
  );
}
