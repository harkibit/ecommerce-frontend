import Image from "next/Image";
import styles from "../styles/Home.module.css";

import React, { useState } from "react";
import { Drawer, Button } from "antd";

import LeftMenu from "./LeftMenu";
import RightMenu from "./RightMenu";

import logo from "/public/logo_transparent.png";

export default function Navbar() {
  const [visible, setVisible] = useState(false);

  const showDrawer = () => {
    setVisible(true);
  };

  const onClose = () => {
    setVisible(false);
  };
  return (
    <nav className={styles.menuBar}>
      <div className={styles.logo}>Logo</div>
      <div className={styles.menuCon}>
        <div className={styles.rightMenu}>
          <RightMenu />

          <Button
            className={styles.barsMenu}
            type="primary"
            onClick={showDrawer}
          >
            <span className="barsBtn"></span>
          </Button>
        </div>

        <Drawer
          title="Basic Drawer"
          placement="right"
          closable={true}
          onClose={onClose}
          visible={visible}
        >
          <LeftMenu />
          <RightMenu />
        </Drawer>
      </div>
    </nav>
  );
}
