import Image from "next/image";
import styles from "../styles/Home.module.css";
import logo from "../public/images/logo_transparent.png";

export default function Sidebar() {
  return (
    <div className={styles.sidebar}>
      <Image alt="logo" src={logo} width={150} height={150}></Image>
    </div>
  );
}