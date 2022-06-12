import Image from "next/image";
import styles from "../styles/Home.module.css";

export default function Sidebar() {
  return (
    <div className={styles.sidebar}>
      hello
      <Image alt="logo" src="logo.svg" width={150} height={150}></Image>
    </div>
  );
}
