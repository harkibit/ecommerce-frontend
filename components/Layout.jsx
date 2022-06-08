import Sidebar from "./Sidebar";
import styles from "../styles/Home.module.css";

import Footer from "./Footer";

import { Layout } from "antd";

const { Header, Sider, Content } = Layout;

export default function Wrapper({ children }) {
  return (
    <div className={styles.container}>
      <Content className={styles.main}>{children}</Content>
      <Footer />
    </div>
  );
}
