import Image from "next/Image";
import Link from "next/Link";
import styles from "../styles/Home.module.css";

import React, { useState } from "react";
import { Drawer, Button } from "antd";

import LeftMenu from "./LeftMenu";
import RightMenu from "./RightMenu";

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
      <Link href="/">
        <div className={styles.logo}>
          <Image src="/logo.svg" width={60} height={60} alt="logo" />
        </div>
      </Link>
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
