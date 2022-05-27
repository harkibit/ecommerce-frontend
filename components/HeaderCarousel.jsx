import React from "react";
import { Carousel } from "antd";
import slider1 from "../public/images/slider1.png";

const backgroundStyle = {
  backgroundImage: `url(${slider1})`,
  width: "400px",
  height: "400px",
  backgroundPosition: "center",
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
};
const contentStyle = {
  height: "400px",
  color: "#fff",
  lineHeight: "160px",
  background: "#364d79",
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-start",
  padding: "0 24px",
  fontSize: "36px",
};

export default function HeaderCarousel() {
  return (
    <Carousel dotPosition="right" effect="scrollx">
      <div style={backgroundStyle}>
        <h2 style={contentStyle}>Hello this is the first sale offer</h2>
      </div>
      <div style={backgroundStyle}>
        <h2 style={contentStyle}>Hello this is the second sale offer</h2>
      </div>
    </Carousel>
  );
}
