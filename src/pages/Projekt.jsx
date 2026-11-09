import { intro, sections, flyer, press, plakate } from "../content/projekt.js";

export default function Projekt() {
  return (
    <>
      <section>
        <div>
          <p>{intro.eyebrow}</p>
          <h1>{intro.title}</h1>
          <p>{intro.text}</p>
          <p>{intro.subtitle}</p>
          <blockquote>{intro.quote}</blockquote>
        </div>
      </section>
      <div>
        {sections.map((section) => (
          <section
            id={section.id}
            key={section.id}
          >
            <p>Projekt LANGES LEBEN</p>
            <h2>{section.title}</h2>

            {section.items ? (
              <ul>
                {section.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            ) : (
              <p>{section.text}</p>
            )}

            {section.id === "bausteine" && (
              <a
                href={flyer}
                target="_blank"
                rel="noreferrer"
              >
                Langes Leben Flyer 2 öffnen
              </a>
            )}

            {section.id === "plakataktion" && (
              <>
                <p>Umsetzungsbeginn: September 2025</p>
                <div>
                  {plakate.map(([title, url]) => (
                    <a
                      href={url}
                      target="_blank"
                      rel="noreferrer"
                      key={url}
                    >
                      <img src={url} alt={title} />
                    </a>
                  ))}
                </div>
              </>
            )}

            {section.id === "presse" && (
              <div>
                {press.map(([date, title, url]) => (
                  <a
                    href={url}
                    target="_blank"
                    rel="noreferrer"
                    key={url}
                  >
                    <span>{date}</span>
                    {title}
                    <b>PDF öffnen →</b>
                  </a>
                ))}
              </div>
            )}
          </section>
        ))}

        <section>
          <div>
            <p>Kontakt</p>
            <h2>Gemeinsam gesund und lebendig bleiben</h2>
            <p>
              Zweigverein Ökozentrum
              <br />
              Bergstraße 24
              <br />
              6460 Imst
            </p>
          </div>

          <div>
            <p>Erreichbarkeit</p>
            <p>
              Tel.: 05412/65 080
              <br />
              <a href="mailto:info@regional.tirol">info@regional.tirol</a>
            </p>
            <p>
              <a href="http://oekozentrum.at/" target="_blank" rel="noreferrer">
                Ökozentrum Imst
              </a>
              <br />
              <a
                href="http://www.genussregionen.at"
                target="_blank"
                rel="noreferrer"
              >
                www.genussregionen.at
              </a>
            </p>
          </div>
        </section>
      </div>
    </>
  );
}