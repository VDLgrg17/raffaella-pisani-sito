# Mappa Blocchi F — Raffaella Pisani · Cultura Olfattiva

> Protocollo Blocchi F v2.0 attivo. Ogni modifica al codice deve dichiarare i blocchi coinvolti.
> File principale: `index.html` · File sperimentale: `hero-archivio.html`
> Ultimo aggiornamento: 2026-07-14

## Blocchi CSS (in `<style>` di index.html)

| Blocco | Responsabilità | Dipende da | Status | Last modified |
|--------|----------------|------------|--------|---------------|
| F0 | Meta, font Google, variabili CSS `:root`, reset globale | nessuno | STABLE | 2026-07-14 |
| F1 | Reset, variabili colore, tipografia base | F0 | STABLE | 2026-07-14 |
| F2 | CSS Nav: navigazione, logo mirino SVG, menu links | F0, F1 | STABLE | 2026-07-14 |
| F3 | CSS Hero: layout split, colonna foto, colonna testo, scia SVG | F0, F1 | STABLE | 2026-07-14 |
| F4 | CSS Chi Sono: sezione identità, testo, foto | F0, F1 | STABLE | 2026-07-14 |
| F5 | CSS Visione: tre parole, card Accoglienza/Cultura/Ascolto | F0, F1 | STABLE | 2026-07-14 |
| F6 | CSS Servizi: card Divulgazione, Direzione Narrativa, Sinestesie | F0, F1 | STABLE | 2026-07-14 |
| F7 | CSS Credibilità: collaborazioni, voci, citazioni | F0, F1 | STABLE | 2026-07-14 |
| F8 | CSS Contatti: form, CTA, percorso olfattivo | F0, F1 | STABLE | 2026-07-14 |
| F9 | CSS Footer: logo, info, copyright | F0, F1 | STABLE | 2026-07-14 |
| F10 | CSS Responsive: media queries mobile/tablet per tutti i blocchi | F2–F9 | STABLE | 2026-07-14 |

## Blocchi HTML (nel `<body>` di index.html)

| Blocco | Nome breve | Contenuto | Dipende da | Status | Last modified |
|--------|-----------|-----------|------------|--------|---------------|
| F11 | Nav | Logo mirino SVG, nome, menu Chi Sono/Servizi/Contatti | F0, F2 | STABLE | 2026-07-14 |
| F12 | Hero | Foto AI, pannello verde, nome, claim, citazione, CTA Scrivimi | F0, F3 | STABLE | 2026-07-14 |
| F13 | Chi Sono | "Da cultrice della parola, disegno l'intangibile." | F0, F4 | STABLE | 2026-07-14 |
| F14 | Visione | "Tre parole. Un metodo." — Accoglienza, Cultura, Ascolto | F0, F5 | STABLE | 2026-07-14 |
| F15 | Servizi | 3 card: Divulgazione Culturale, Direzione Narrativa, Sinestesie | F0, F6 | STABLE | 2026-07-14 |
| F16 | Credibilità | Collaborazioni e voci di chi ha percorso il cammino | F0, F7 | STABLE | 2026-07-14 |
| F17 | Contatti | Form/CTA "Inizia il tuo percorso olfattivo" | F0, F8 | STABLE | 2026-07-14 |
| F18 | Footer | Footer con logo, copyright, link | F0, F9 | STABLE | 2026-07-14 |

## Grafo delle dipendenze

```
F0 (config globale)
├── F1 (CSS base) → F2 · F3 · F4 · F5 · F6 · F7 · F8 · F9
│                   F10 (responsive) → dipende da F2–F9
├── F11 (HTML nav) → CSS: F2
├── F12 (HTML hero) → CSS: F3
├── F13 (HTML chi sono) → CSS: F4
├── F14 (HTML visione) → CSS: F5
├── F15 (HTML servizi) → CSS: F6
├── F16 (HTML credibilità) → CSS: F7
├── F17 (HTML contatti) → CSS: F8
└── F18 (HTML footer) → CSS: F9
```

## Vocabolario condiviso

| Dici | Intendi | Blocco |
|------|---------|--------|
| "Nav" o "menu" | Menu in alto con logo e link | F11 + F2 |
| "Hero" | Sezione principale con foto e pannello verde | F12 + F3 |
| "Chi Sono" | Prima sezione sotto la hero | F13 + F4 |
| "Visione" | Sezione Accoglienza/Cultura/Ascolto | F14 + F5 |
| "Servizi" | Le 3 card dei servizi | F15 + F6 |
| "Credibilità" | Sezione collaborazioni | F16 + F7 |
| "Contatti" | Form e CTA finale | F17 + F8 |
| "Footer" | Piè di pagina | F18 + F9 |

## Note operative

- Il logo mirino SVG è presente in F11 (nav), F12 (hero), F18 (footer) — rimozione indipendente per ciascuno
- La foto hero è embedded come base64 in F12
- F10 gestisce il responsive di tutti i blocchi F11–F18
- Inviare screenshot con freccia/cerchio per identificare il blocco da modificare

## Aggiornamento — 2026-07-21
| Blocco | Responsabilità | Dipende da | Status | Last modified |
|--------|----------------|------------|--------|---------------|
| F7b | CSS Galleria Fotografica: griglia 2col mobile / 4col desktop, hover zoom | F0, F1 | STABLE | 2026-07-21 |
| F16b | Markup GALLERIA FOTOGRAFICA: 8 immagini editoriali botanico-olfattive | F0, F7b | STABLE | 2026-07-21 |

## Correzioni SEO — 2026-07-21
- F0: rimosso canonical https://raffaellapisani.it/ (dominio non ancora attivo) — da ripristinare quando il dominio sarà registrato
