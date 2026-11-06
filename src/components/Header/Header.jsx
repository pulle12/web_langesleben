import { NavLink } from "react-router-dom";
import styles from "./Header.module.css";

const linkClass = ({ isActive }) =>
  `${styles.link} ${isActive ? styles.active : ""}`;

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={`container ${styles.inner}`}>
        <NavLink to="/" className={styles.logo}>Langes Leben</NavLink>
        <nav className={styles.nav}>
          <NavLink to="/" end className={linkClass}>Start</NavLink>
          <NavLink to="/projekt" className={linkClass}>Projekt</NavLink>
        </nav>
      </div>
    </header>
  );
}