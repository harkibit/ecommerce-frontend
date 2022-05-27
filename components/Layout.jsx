import Sidebar from "./Sidebar";
import styles from "../styles/Home.module.css";

export default function Layout({ children }) {
  return (
    <div className={styles.container}>
      <Sidebar />
      <main className={styles.main}>{children}</main>
    </div>
  );
}
