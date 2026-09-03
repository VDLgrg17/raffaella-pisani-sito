# Mappa dei Blocchi F — Raffaella Pisani

**Fonte di verità per la numerazione project-wide univoca.**

Protocollo: `blocchi-f-operativo` con sorveglianza `blocchi-f-vedetta`
Aggiornamento: 2026-09-03
Versione: 3.5

## Stato del progetto

Il sito pubblicato usa `index.html`, `pwa-action-bar.js`, `manifest.json` e `sw.js`. La pagina `blog.html` costituisce l’archivio separato. I file `hero-archivio.html` e `hero-nuova.html` sono prototipi non collegati alla navigazione pubblica; restano mappati per garantire l’unicità project-wide.

Il codice dei primi otto interventi è completato e certificato. La nuova sezione Modalità di collaborazione presenta otto forme di ingaggio e una call to action verso Contatti.

## Sito principale

| Blocco | File | Righe | Responsabilità | Dipende da | Status | Last modified |
|---|---|---:|---|---|---|---|
| F0 | `index.html` | 1–32 | Metadati, font, manifest e impostazioni PWA | nessuno | STABLE | 2026-07-31 |
| F1 | `index.html` | 33–109 | Reset, variabili e tipografia globale | F0 | STABLE | 2026-07-31 |
| F2 | `index.html` | 110–152 | Stile della navigazione desktop | F1 | STABLE | 2026-07-31 |
| F2b | `index.html` | 153–215 | Stile della navigazione mobile e hamburger | F1, F2 | STABLE | 2026-07-31 |
| F3 | `index.html` | 216–475 | Stile della hero | F1 | STABLE | 2026-09-03 |
| F4 | `index.html` | 476–498 | Stile della sezione Chi sono | F1 | STABLE | 2026-09-03 |
| F5 | `index.html` | 499–544 | Stile della sezione Visione | F1 | STABLE | 2026-07-31 |
| F6 | `index.html` | 545–643 | Stile della sezione Servizi, dell’introduzione e delle sei aree | F1 | STABLE | 2026-09-02 |
| F8 | `index.html` | 644–797 | Stile della sezione Contatti | F1 | STABLE | 2026-09-03 |
| F7 | `index.html` | 798–836 | Stile della sezione Collaborazioni | F1 | STABLE | 2026-07-31 |
| F7-ext | `index.html` | 837–910 | Stile di testimonianze e Community | F1 | STABLE | 2026-07-31 |
| F7b | `index.html` | 911–950 | Stile della galleria fotografica | F1 | STABLE | 2026-07-31 |
| F9 | `index.html` | 951–979 | Stile del footer | F1 | STABLE | 2026-07-31 |
| F10 | `index.html` | 980–995 | Regole responsive e animazione fade-in | F1, F2–F9 | STABLE | 2026-07-31 |
| F10b | `index.html` | 996–1114 | Ordine mobile della hero e griglia Chi sono | F3, F4, F10 | STABLE | 2026-09-03 |
| F20 | `index.html` | 1115–1168 | Stile della barra azioni PWA | F1, F10 | STABLE | 2026-09-02 |
| F21 | `index.html` | 1169–1378 | Stile delle modali PWA | F1, F20 | STABLE | 2026-09-02 |
| F21b | `index.html` | 1379–1406 | Pulsante e visibilità delle testimonianze Community | F1, F7-ext | STABLE | 2026-09-02 |
| F11 | `index.html` | 1492–1527 | Markup del menu desktop e mobile | F2, F2b, F25 | STABLE | 2026-09-02 |
| F12 | `index.html` | 1528–1555 | Markup della hero | F3, F10b | STABLE | 2026-09-03 |
| F13 | `index.html` | 1556–1604 | Markup della sezione Chi sono | F3, F4, F10b, F19 | STABLE | 2026-09-03 |
| F14 | `index.html` | 1605–1635 | Markup della sezione Visione | F5 | STABLE | 2026-07-31 |
| F15 | `index.html` | 1636–1685 | Markup della sezione Servizi | F3, F6, F19, F24 | STABLE | 2026-09-02 |
| F16 | `index.html` | 1722–1846 | Introduzione, collaborazioni e case history della sezione Referenze | F3, F6, F7, F8, F19 | STABLE | 2026-09-02 |
| F26 | `index.html` | 1847–1974 | Community olfattiva e testimonianze personali | F3, F6, F7-ext, F17, F19, F21b | STABLE | 2026-09-02 |
| F17 | `index.html` | 1975–2020 | Markup della sezione Contatti | F8 | STABLE | 2026-09-02 |
| F18 | `index.html` | 2021–2032 | Markup del footer | F9 | STABLE | 2026-07-31 |
| F19 | `index.html` | 2033–2045 | Osservatore delle animazioni fade-in | F10 | STABLE | 2026-07-31 |
| F22 | `index.html` | 2046–2057 | Registrazione del service worker | F28, F29 | STABLE | 2026-09-02 |
| F23 | `index.html` | 2058–2118 | Markup della barra e delle modali PWA | F20, F21, F27, F28 | STABLE | 2026-09-02 |
| F24 | `index.html` | 2119–2132 | Comportamento degli accordion Servizi | F6, F15 | STABLE | 2026-09-02 |
| F25 | `index.html` | 2133–2161 | Comportamento del menu hamburger | F2b, F11 | STABLE | 2026-09-02 |
| F27 | `pwa-action-bar.js` | 1–145 | Logica della barra azioni e delle modali PWA | F20, F21, F23, F29 | STABLE | 2026-09-02 |
| F27.1 | `pwa-action-bar.js` | 77–103 | Ascolto degli aggiornamenti del service worker | F27, F29 | STABLE | 2026-09-02 |
| F28 | `manifest.json` | 1–118 | Identità, icone, schermate e scorciatoie PWA | F0, F13, F15, F17 | STABLE | 2026-09-02 |
| F29 | `sw.js` | 1–106 | Cache, aggiornamento e fallback offline | F28 | STABLE | 2026-09-02 |
| F29.1 | `sw.js` | 15–29 | Installazione e precache | F29 | STABLE | 2026-09-02 |
| F29.2 | `sw.js` | 31–64 | Attivazione e pulizia delle cache | F29 | STABLE | 2026-09-02 |
| F29.3 | `sw.js` | 66–97 | Recupero network-first e fallback cache | F29 | STABLE | 2026-09-02 |
| F29.4 | `sw.js` | 99–106 | Gestione dei messaggi del client | F29 | STABLE | 2026-09-02 |
| F72 | `index.html` | 1407–1491 | Stile della sezione Modalità di collaborazione | F1, F3, F10 | STABLE | 2026-09-02 |
| F73 | `index.html` | 1686–1721 | Markup della sezione Modalità di collaborazione | F3, F10, F17, F19, F72 | STABLE | 2026-09-02 |

Il formato JSON non consente commenti: **F28** è identificato esclusivamente nella presente mappa.

## Pagina Archivio

| Blocco | File | Righe | Responsabilità | Dipende da | Status | Last modified |
|---|---|---:|---|---|---|---|
| F30 | `blog.html` | 1–28 | Configurazione della pagina Archivio | F0, F28 | STABLE | 2026-09-02 |
| F31 | `blog.html` | 29–57 | Reset, colori e tipografia Archivio | F30 | STABLE | 2026-09-02 |
| F32 | `blog.html` | 58–101 | Stile della navigazione Archivio | F31 | STABLE | 2026-09-02 |
| F33 | `blog.html` | 102–137 | Layout della pagina Archivio | F31 | STABLE | 2026-09-02 |
| F34 | `blog.html` | 138–174 | Stile dei filtri | F31, F33 | STABLE | 2026-09-02 |
| F35 | `blog.html` | 175–241 | Stile della griglia articoli | F31, F33 | STABLE | 2026-09-02 |
| F36 | `blog.html` | 242–274 | Stile della rubrica Ti Odoro | F31, F33 | STABLE | 2026-09-02 |
| F37 | `blog.html` | 275–335 | Stile del footer Archivio | F31 | STABLE | 2026-09-02 |
| F38 | `blog.html` | 336–350 | Regole responsive Archivio | F32–F37 | STABLE | 2026-09-02 |
| F39 | `blog.html` | 351–362 | Animazione fade-in Archivio | F31 | STABLE | 2026-09-02 |
| F40 | `blog.html` | 363–376 | Markup della navigazione Archivio | F32, F11, F13–F17 | STABLE | 2026-09-02 |
| F41 | `blog.html` | 377–385 | Markup della pagina Archivio | F33 | STABLE | 2026-09-02 |
| F42 | `blog.html` | 386–396 | Markup dei filtri | F34, F46 | STABLE | 2026-09-02 |
| F43 | `blog.html` | 397–449 | Markup della griglia articoli | F35, F46 | STABLE | 2026-09-02 |
| F44 | `blog.html` | 450–458 | Markup della rubrica Ti Odoro | F36 | STABLE | 2026-09-02 |
| F45 | `blog.html` | 459–483 | Markup del footer Archivio | F37 | STABLE | 2026-09-02 |
| F46 | `blog.html` | 484–519 | Filtri e osservatore fade-in Archivio | F39, F42, F43 | STABLE | 2026-09-02 |

## Prototipi non pubblicati

| Blocco | File | Righe | Responsabilità | Dipende da | Status | Last modified |
|---|---|---:|---|---|---|---|
| F50 | `hero-archivio.html` | 1–32 | Configurazione del prototipo Hero Archivio | nessuno | STABLE | 2026-09-02 |
| F51 | `hero-archivio.html` | 33–41 | Layout Hero Archivio | F50 | STABLE | 2026-09-02 |
| F52 | `hero-archivio.html` | 42–96 | Colonna fotografica Hero Archivio | F50, F51 | STABLE | 2026-09-02 |
| F53 | `hero-archivio.html` | 97–131 | Colonna testuale Hero Archivio | F50, F51 | STABLE | 2026-09-02 |
| F54 | `hero-archivio.html` | 132–140 | Scia grafica Hero Archivio | F50, F51 | STABLE | 2026-09-02 |
| F55 | `hero-archivio.html` | 141–160 | Parole-segno Hero Archivio | F50, F53 | STABLE | 2026-09-02 |
| F56 | `hero-archivio.html` | 161–183 | Intestazione Hero Archivio | F50, F53 | STABLE | 2026-09-02 |
| F57 | `hero-archivio.html` | 184–213 | Nome e sottotitolo Hero Archivio | F50, F53 | STABLE | 2026-09-02 |
| F58 | `hero-archivio.html` | 214–235 | Divisore Hero Archivio | F50, F53 | STABLE | 2026-09-02 |
| F59 | `hero-archivio.html` | 236–247 | Frase strategica Hero Archivio | F50, F53 | STABLE | 2026-09-02 |
| F60 | `hero-archivio.html` | 248–287 | Nota di laboratorio Hero Archivio | F50, F53 | STABLE | 2026-09-02 |
| F61 | `hero-archivio.html` | 288–315 | Collegamento Scrivimi Hero Archivio | F50, F53 | STABLE | 2026-09-02 |
| F62 | `hero-archivio.html` | 316–348 | Indicatore di scorrimento Hero Archivio | F50, F53 | STABLE | 2026-09-02 |
| F63 | `hero-archivio.html` | 349–363 | Responsive Hero Archivio | F51–F62 | STABLE | 2026-09-02 |
| F64 | `hero-archivio.html` | 364–fine | Markup Hero Archivio | F50–F63 | STABLE | 2026-09-02 |
| F65 | `hero-nuova.html` | 1–31 | Configurazione del prototipo Hero Nuova | nessuno | STABLE | 2026-09-02 |
| F66 | `hero-nuova.html` | 32–83 | Layout e colonna foto Hero Nuova | F65 | STABLE | 2026-09-02 |
| F67 | `hero-nuova.html` | 84–118 | Colonna testo Hero Nuova | F65, F66 | STABLE | 2026-09-02 |
| F68 | `hero-nuova.html` | 119–148 | Motivi grafici Hero Nuova | F65, F67 | STABLE | 2026-09-02 |
| F69 | `hero-nuova.html` | 149–279 | Identità, testi e azioni Hero Nuova | F65, F67, F68 | STABLE | 2026-09-02 |
| F70 | `hero-nuova.html` | 280–293 | Responsive Hero Nuova | F66–F69 | STABLE | 2026-09-02 |
| F71 | `hero-nuova.html` | 294–fine | Markup Hero Nuova | F65–F70 | STABLE | 2026-09-02 |

Gli identificatori **F47–F49** restano riservati a eventuali estensioni della pagina Archivio.

## Grafo testuale delle dipendenze

```text
F0 → F1
F1 → F2, F2b, F3, F4, F5, F6, F7, F7-ext, F7b, F8, F9, F10, F20, F21, F21b
F2 + F2b + F25 → F11
F3 + F10b → F12
F4 → F13
F5 → F14
F6 + F24 → F15
F1 + F3 + F10 → F72
F3 + F10 + F17 + F19 + F72 → F73
F3 + F6 + F7 + F8 + F19 → F16
F3 + F6 + F7-ext + F17 + F19 + F21b → F26
F8 → F17
F9 → F18
F10 → F19
F20 + F21 + F27 → F23
F28 → F22, F29
F29 → F22, F27.1
F30 → F31 → F32-F39 → F40-F46
F40 → F11, F13-F17
F50 → F51-F64
F65 → F66-F71
```

## Dipendenze trasversali note

| Contratto condiviso | Blocchi interessati | Controllo richiesto |
|---|---|---|
| Ancore della pagina principale | F11, F13–F17, F26, F28, F40 | Verificare ogni rinomina in menu, sezioni, scorciatoie PWA e Archivio. |
| Navigazione mobile | F2b, F11, F25 | Verificare visibilità, apertura, chiusura e area sicura iOS. |
| Servizi accordion | F6, F15, F24 | Conservare classi, attributi e comportamento di apertura. |
| Barra PWA | F20, F21, F22, F23, F27, F28, F29 | Verificare desktop, modalità installata e aggiornamento cache. |
| Animazioni | F10, F19, F39, F46, F73 | Verificare che gli elementi diventino visibili dopo il caricamento. |
| Call to action verso Contatti | F12, F17, F26, F73 | Verificare l’ancora `#contatti` e la leggibilità sopra la barra PWA. |

## Vocabolario condiviso

| Espressione | Blocchi |
|---|---|
| Menu principale | F2, F2b, F11, F25 |
| Hero | F3, F10b, F12 |
| Chi sono | F4, F13 |
| Visione | F5, F14 |
| Servizi | F6, F15, F24 |
| Collaborazioni e credibilità | F7, F7b, F16 |
| Referenze professionali | F3, F6, F7, F8, F16, F19 |
| Community | F3, F6, F7-ext, F19, F21b, F26 |
| Contatti | F8, F17 |
| Footer | F9, F18 |
| PWA | F20–F23, F27–F29 |
| Archivio | F30–F46 |

## Regole di modifica

1. Ogni identificatore è unico in tutto il repository.
2. Il codice reale prevale sulla mappa quando emerge una discrepanza.
3. Ogni intervento richiede il gate Vedetta prima della modifica.
4. I soli blocchi autorizzati passano a `WIP` durante l’intervento.
5. Gli header e la mappa devono essere aggiornati dopo la verifica.
6. Un blocco diventa `STABLE` soltanto dopo il controllo dell’intera catena d’impatto.
