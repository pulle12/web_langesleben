import { Link } from "react-router-dom";
import { hero, downloads, videos, diverse_uebungen } from "../content/home.js";
import Gesundheitsrechner from "../features/gesundheitsrechner/Gesundheitsrechner.jsx";
import styles from "./Home.module.css";

const videoCategories = [
  ["b", "Bewegungsübungen"],
  ["e", "Erinnerungsarbeit"],
  ["g", "Gehirntraining"],
  ["ez", "Es ist Zeit"],
];

function youtubeEmbedUrl(link) {
  try {
    const url = new URL(link);

    if (url.hostname === "youtu.be") {
      return `https://www.youtube.com/embed/${url.pathname.slice(1)}`;
    }

    if (url.pathname === "/watch") {
      const videoId = url.searchParams.get("v");
      return videoId ? `https://www.youtube.com/embed/${videoId}` : link;
    }

    return link;
  } catch {
    return link;
  }
}

export default function Home() {
  return (
    <>
      <section className={styles.hero}>
        <div className={`container ${styles.heroInner}`}>
          <span className={styles.eyebrow}>{hero.eyebrow}</span>
          <h1>{hero.title}</h1>
          <p className={styles.lead}>{hero.text}</p>
          <p className={styles.note}>{hero.note}</p>
          <div className={styles.actions}>
            <Link to="/projekt" className="btn btn-primary">Projekt entdecken</Link>
            <a href={hero.qrCode} className="btn btn-ghost">QR-Code zum Ausdrucken</a>
          </div>
        </div>
      </section>

      <Gesundheitsrechner />

      <section id="downloads" className="container section">
        <p className="kicker">Zum Herunterladen</p>
        <h2>Übungen zum Downloaden</h2>
        {downloads.map((group) => (
          <div className={styles.resourceGroup} key={group.title}>
            <h3>{group.title}</h3>
            <div className={styles.resourceGrid}>
              {group.items.map(([title, url]) => <a className={styles.resource} href={url} key={url} target="_blank" rel="noreferrer">{title}<span>PDF öffnen →</span></a>)}
            </div>
          </div>
        ))}
      </section>

      <section className={`${styles.mediaSection} section`}>
        <div className="container">
          <p className="kicker">Bewegung und Denken</p>
          <h2>Videos zum Anschauen</h2>
          {videoCategories.map(([category, title]) => {
            const categoryVideos = videos.filter((video) => video.category === category);

            if (categoryVideos.length === 0) return null;

            return (
              <div className={styles.videoCategory} key={category}>
                <h3>{title}</h3>
                <div className={styles.mediaGrid}>
                  {categoryVideos.map((video) => (
                    <article className={styles.mediaCard} key={video.title}>
                      <span className={styles.mediaIcon}>▶</span>
                      <h4>{video.title}</h4>
                      {video.link ? (
                        <iframe
                          src={youtubeEmbedUrl(video.link)}
                          title={video.title}
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                          allowFullScreen
                        />
                      ) : <p>YouTube-Link wird hier ergänzt.</p>}
                    </article>
                  ))}
                </div>
              </div>
            );
          })}
          <h3 className={styles.subheading}>Diverse Übungen</h3>
          <div className={styles.audioGrid}>
            {diverse_uebungen.map((item, index) => (
              <article className={styles.audio} key={`${item.title}-${index}`}>
                <h3>{item.title}</h3>
                <video controls preload="metadata">
                  <source src={item.link} type="video/mp4" />
                  Dein Browser unterstützt dieses Video nicht.
                </video>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}