import { useState } from "react";
import styles from "./Gesundheitsrechner.module.css";

const questions = [
  {
    id: "bewegung",
    label: "Bewegung",
    question: "Wie oft warst du diese Woche bewusst in Bewegung?",
    hint: "Spaziergang, Gymnastik, Tanz oder eine andere Aktivität zählen.",
  },
  {
    id: "gemeinschaft",
    label: "Gemeinschaft",
    question: "Wie oft hattest du diese Woche guten Kontakt mit anderen Menschen?",
    hint: "Ein Gespräch, ein Treffen, ein Telefonat oder gemeinsames Tun.",
  },
  {
    id: "kopf",
    label: "Kopf & Neugier",
    question: "Wie oft hast du deinen Kopf mit etwas Neuem beschäftigt?",
    hint: "Rätsel, Musik, Lernen, Erinnern oder ein neues Rezept.",
  },
  {
    id: "erholung",
    label: "Erholung",
    question: "Wie oft hast du dir bewusst eine ruhige Pause gegönnt?",
    hint: "Atemübung, Natur, Schlaf, Lesen oder einfach nichts tun.",
  },
  {
    id: "alltag",
    label: "Alltag",
    question: "Wie oft hast du dir diese Woche selbst etwas Gutes getan?",
    hint: "Eine kleine Gewohnheit, die dir Energie gibt und Freude macht.",
  },
];

const initialAnswers = Object.fromEntries(questions.map((question) => [question.id, 0]));

function getResult(score) {
  if (score < 40) {
    return {
      title: "Ein kleiner Schritt reicht",
      text: "Du musst nicht alles auf einmal ändern. Such dir einen kleinen Impuls aus und probier ihn diese Woche aus.",
    };
  }

  if (score < 70) {
    return {
      title: "Du bist gut unterwegs",
      text: "Dein Alltag enthält bereits viele gute Momente. Ein gezielter neuer Impuls kann deinen Rhythmus noch stärken.",
    };
  }

  return {
    title: "Starker Wochenrhythmus",
    text: "Du bringst bereits viele gesundheitsfördernde Gewohnheiten in deinen Alltag. Bleib neugierig und teile einen Impuls mit anderen.",
  };
}

export default function Gesundheitsrechner() {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState(initialAnswers);
  const [isComplete, setIsComplete] = useState(false);

  const total = Object.values(answers).reduce((sum, value) => sum + value, 0);
  const score = Math.round((total / (questions.length * 7)) * 100);
  const result = getResult(score);
  const weakestQuestion = questions.reduce((weakest, question) => (
    answers[question.id] < answers[weakest.id] ? question : weakest
  ), questions[0]);

  function updateAnswer(value) {
    const currentQuestion = questions[step];
    setAnswers((currentAnswers) => ({
      ...currentAnswers,
      [currentQuestion.id]: Number(value),
    }));
  }

  function nextStep() {
    if (step === questions.length - 1) {
      setIsComplete(true);
      return;
    }

    setStep((currentStep) => currentStep + 1);
  }

  function previousStep() {
    setStep((currentStep) => Math.max(currentStep - 1, 0));
  }

  function reset() {
    setAnswers(initialAnswers);
    setStep(0);
    setIsComplete(false);
  }

  return (
    <section className={styles.section} id="gesundheitsrechner">
      <div className={styles.shell}>
        <div className={styles.intro}>
          <span className={styles.eyebrow}>Dein individueller Wochenimpuls</span>
          <h2>Langes-Leben-Check-in</h2>
          <p>
            Fünf kurze Fragen helfen dir, auf deinen Alltag zu schauen. Das Ergebnis ist keine Diagnose,
            sondern eine freundliche Idee für deinen nächsten kleinen Schritt.
          </p>
        </div>

        <div className={styles.panel}>
          {!isComplete ? (
            <>
              <div className={styles.progressRow}>
                <span>Frage {step + 1} von {questions.length}</span>
                <span>{Math.round(((step + 1) / questions.length) * 100)} %</span>
              </div>
              <div className={styles.progressTrack} aria-hidden="true">
                <span style={{ width: `${((step + 1) / questions.length) * 100}%` }} />
              </div>

              <fieldset className={styles.question}>
                <legend>{questions[step].question}</legend>
                <p>{questions[step].hint}</p>
                <label htmlFor={`answer-${questions[step].id}`}>
                  <strong>{answers[questions[step].id]} von 7 Tagen</strong>
                  <input
                    id={`answer-${questions[step].id}`}
                    type="range"
                    min="0"
                    max="7"
                    value={answers[questions[step].id]}
                    onChange={(event) => updateAnswer(event.target.value)}
                  />
                  <span className={styles.rangeLabels}><span>Noch nicht</span><span>Fast täglich</span></span>
                </label>
              </fieldset>

              <div className={styles.actions}>
                <button type="button" className={styles.secondaryButton} onClick={previousStep} disabled={step === 0}>Zurück</button>
                <button type="button" className={styles.primaryButton} onClick={nextStep}>{step === questions.length - 1 ? "Auswertung ansehen" : "Weiter"}</button>
              </div>
            </>
          ) : (
            <div className={styles.result}>
              <div className={styles.score}>{score}<span>%</span></div>
              <div>
                <span className={styles.resultLabel}>Dein Wochenbild</span>
                <h3>{result.title}</h3>
                <p>{result.text}</p>
                <p className={styles.recommendation}><strong>Dein nächster Impuls:</strong> Widme dich dem Bereich „{weakestQuestion.label}“ mit einer kleinen, konkreten Handlung.</p>
              </div>
              <button type="button" className={styles.secondaryButton} onClick={reset}>Nochmal ausfüllen</button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
