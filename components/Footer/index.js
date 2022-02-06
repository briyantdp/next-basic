import styles from "../../styles/Footer.module.css";
export default function Footer() {
  const yearNow = new Date().getFullYear();
  return (
    <footer className={styles.footer}>
      <p>Copyright {yearNow} - Bryant Dawson Priyantoro </p>
    </footer>
  );
}
