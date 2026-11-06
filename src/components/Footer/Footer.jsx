import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.inner}`}>
        <strong>Langes Leben</strong>
        <span>© {new Date().getFullYear()} Schul-Projekt IMCM</span>
      </div>
    </footer>
  );
}