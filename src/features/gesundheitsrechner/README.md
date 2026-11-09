# Gesundheitsrechner: CSS-Uebergabe

Die React-Logik liegt in `Gesundheitsrechner.jsx`. Das CSS-Modul darf von der Design-Zustaendigkeit gestaltet werden.

## Erwartete Klassen

- `section`: voller Rechnerbereich, Hintergrund und vertikaler Abstand
- `shell`: zweispaltiges Desktop-Layout, einspaltig auf Mobilgeraeten
- `intro`: Einleitung links
- `eyebrow`, `resultLabel`: kleine Hervorhebungstexte
- `panel`: sichtbarer Rechnerbereich
- `progressRow`, `progressTrack`: Fortschrittsanzeige
- `question`: Frage, Hinweis und Slider
- `rangeLabels`: Beschriftung unter dem Slider
- `actions`: Zurueck-/Weiter-Buttons
- `primaryButton`, `secondaryButton`: Button-Varianten
- `result`: Auswertungslayout
- `score`: Prozentwert
- `recommendation`: persoenlicher Wochenimpuls

## Zustaende, die gestaltet werden sollten

1. Erste Frage: Zurueck-Button deaktiviert.
2. Zwischenfragen: Slider, Fortschrittsbalken und Navigation.
3. Letzte Frage: Buttontext `Auswertung ansehen`.
4. Ergebnisansicht: Prozentwert, Ergebnistext und `Nochmal ausfuellen`.
5. Mobile Ansicht: Rechner einspaltig und ohne horizontales Scrollen.

Die Komponente soll ohne fertige CSS-Regeln weiterhin funktionieren. Die Datei darf deshalb schrittweise gestaltet werden, ohne die React-Logik zu aendern.
