import { Link } from "react-router-dom";
import { hero, cards } from "../content/home.js";
import styles from "./Home.module.css";

export default function Home() {
  return (
    <>
      <section className={styles.hero}>
        <div className={`container ${styles.heroInner}`}>
          <span className={styles.eyebrow}>{hero.eyebrow}</span>
          <h1>{hero.title}</h1>
          <p className={styles.lead}>{hero.text}</p>
          <div className={styles.actions}>
            <Link to="/projekt" className="btn btn-primary">Projekt entdecken</Link>
            <a href="#themen" className="btn btn-ghost">Themen ansehen</a>
          </div>
        </div>
      </section>

      <section id="themen" className="container">
        <h2>Unsere Themen</h2>
        <div className={styles.grid}>
          {cards.map((c) => (
            <article key={c.title} className={styles.card}>
              <h3>{c.title}</h3>
              <p>{c.text}</p>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}