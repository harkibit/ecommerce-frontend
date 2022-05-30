import React from "react";

import { FiShoppingCart } from "react-icons/fi";
import { Menu } from "antd";

export default function RightMenu() {
  return (
    <Menu mode="horizontal">
      <Menu.Item key="products">Products</Menu.Item>
      <Menu.Item key="signin">Sign In</Menu.Item>
      <FiShoppingCart />
    </Menu>
  );
}
