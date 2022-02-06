import Link from "next/link";
import styles from "../../styles/Header.module.css";
export default function Header() {
  return (
    <header className={styles.header}>
      <ul className={styles.list}>
        <li className={styles["list-items"]}>
          <Link href="/">
            <a>Home</a>
          </Link>
        </li>
        <li className={styles["list-items"]}>
          <Link href="/blog">
            <a>Blog</a>
          </Link>
        </li>
        <li className={styles["list-items"]}>
          <Link href="/users">
            <a>User</a>
          </Link>
        </li>
        <li className={styles["list-items"]}>
          <a href="/info">Info</a>
        </li>
      </ul>
    </header>
  );
}
