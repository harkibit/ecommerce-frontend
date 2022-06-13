import React from "react";
import styles from "../styles/Home.module.css";

export default function Button(props) {
  const { variant, size, width, value, className, onClick, style } = props;

  const btnVariant = () => {
    switch (variant) {
      case "primary":
        return "btnPrimary";
      case "secondary":
        return "btnSecondary";
      default:
        return "btnPrimary";
    }
  };

  const btnSize = () => {
    switch (size) {
      case "small":
        return "btnSmall";
      case "large":
        return "btnLarge";
      default:
        return "btn";
    }
  };

  const btnWidth = () => {
    switch (width) {
      case "full":
        return "btnFullWidth";
      default:
        return "btn";
    }
  };
  return (
    <button
      className={`btn ${btnVariant()} ${btnSize()} ${btnWidth()} ${className}`}
      onClick={onClick}
      style={style}
    >
      {value}
    </button>
  );
}
