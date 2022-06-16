import Link from "next/link";
import styles from "../styles/Nav.module.css";

const Nav = () => {
  return (
    <div>
      <nav className={styles.navbar}>
        <ul className={styles.unordered}>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/about">About</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Nav;
