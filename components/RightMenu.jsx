import React from "react";

import Link from "next/Link";

import { FiShoppingCart } from "react-icons/fi";
import styles from "../styles/Home.module.css";
import { DownOutlined, SmileOutlined } from "@ant-design/icons";
import { Dropdown, Menu, Space } from "antd";

const menu = (
  <Menu
    items={[
      {
        key: "1",
        label: (
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.antgroup.com"
          >
            1st menu item
          </a>
        ),
      },
      {
        key: "2",
        label: (
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.aliyun.com"
          >
            2nd menu item
          </a>
        ),
      },
      {
        key: "3",
        label: (
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.luohanacademy.com"
          >
            3rd menu item
          </a>
        ),
      },
    ]}
  />
);

export default function RightMenu() {
  return (
    <ul className={styles.rightMenu}>
      <li>
        <Dropdown overlay={menu} arrow>
          <a onClick={(e) => e.preventDefault()}>
            <Space>
              Books
              <DownOutlined />
            </Space>
          </a>
        </Dropdown>
      </li>
      <li>
        <Link href="/signIn">Sign In</Link>
      </li>
      <li>
        <a href="#">
          <FiShoppingCart />
        </a>
      </li>
    </ul>
  );
}
