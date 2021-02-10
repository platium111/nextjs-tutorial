import styles from "../../styles/Layout.module.css";

// feat:  Layout | using to wrapper components
export default function Layout({ children }) {
  return <div className={styles.container}>{children}</div>;
}
