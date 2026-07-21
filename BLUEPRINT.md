# BLUEPRINT v2.0 — Sito Raffaella Pisani
**Logica:** RLM v2.0 | **Data:** 2026-07-21 | **Stato:** Operativo

> Documento master di progetto con logica RLM applicata. Ogni fase dichiara: input richiesti, blocchi F coinvolti, dipendenze, output atteso, condizione di STOP. Nessuna modifica al codice senza aver verificato questo file. Fonti: `visione-sito.md`, `contenuti-cliente.md`, `recapiti.md`, `seo-keywords.md`, `appunti-stile.md`, `mappa_blocchi.md`.

---

## SEZIONE 0 — Identità del Progetto

**Chi è:** Raffaella Pisani, ricercatrice e divulgatrice di cultura olfattiva. Figlia d'arte, oltre 30 anni di campo. Non vende profumi: racconta l'olfatto come linguaggio culturale, sensoriale, poetico. Ha collaborato con Cerasa (Salone del Mobile), Monom, MCZ Group, Pitti/Deha, Temacultura (pubblicazione universitaria), Semenzato, Rotary, Treviso Città e Storie, e altri.

**Ragione sociale:** Sensi di Strati di Pisani Raffaella | P.IVA 05581330262 | ATECO 823003 | Via Po 14/A, 31020 Fontane di Villorba (TV) | raffaellapisani71@gmail.com | 338 573 4333

**Obiettivo del sito:** Luogo editoriale di posizionamento intellettuale. Non un portfolio, non un e-commerce. Chi arriva capisce immediatamente chi è e cosa fa. Tono: calmo, lento, culturale.

**Riferimenti visivi dichiarati dalla cliente:** Fischersund, Frama, Mad et Len, Nez/Bynez, Flora Danica Beauty.

---

## SEZIONE 1 — Stato Attuale del Sito

| Blocco F | Sezione | Stato | Problema rilevato |
|---|---|---|---|
| F0 | Meta + Font + CSS root | Parziale | Mancano: Space Mono, 5 variabili colore nuove, SEO meta ottimizzata |
| F1 | Variabili CSS | Parziale | Mancano: `--zafferano`, `--terracotta`, `--viola-incenso`, `--salvia-bg`, `--seppia` |
| F2 | CSS Nav | Stabile | OK — nessuna modifica necessaria ora |
| F3 | CSS Hero | Da rivedere | Spaziatura troppo compatta, foto AI generica |
| F4 | CSS Chi Sono | Da rivedere | Spaziatura troppo compatta |
| F5 | CSS Visione | Da rivedere | Spaziatura troppo compatta |
| F6 | CSS Servizi | Da rivedere | Stile troppo corporate, card rigide |
| F7 | CSS Credibilità | Da costruire | CSS placeholder, nessun layout editoriale |
| F8 | CSS Contatti | Stabile | OK |
| F9 | CSS Footer | Stabile | OK — dati reali inseriti |
| F10 | CSS Responsive | Da aggiornare | Dipende da F3-F9: va aggiornato dopo ogni modifica CSS |
| F11 | HTML Nav | Aggiornato | 5 voci presenti: Chi sono, Visione, Servizi, Collaborazioni, Contatti |
| F12 | HTML Hero | Da rivedere | Foto AI base64 generica, manca sezione Manifesto |
| F13 | HTML Chi Sono | Stabile | Testo presente, manca foto reale |
| F14 | HTML Visione | Stabile | 3 pilastri presenti |
| F15 | HTML Servizi | Stabile | 3 servizi presenti |
| F16 | HTML Credibilità | Da costruire | Attualmente placeholder — 13 testi reali disponibili in `contenuti-cliente.md` |
| F17 | HTML Contatti | Aggiornato | Email reale inserita, form non collegato a endpoint |
| F18 | HTML Footer | Aggiornato | Dati reali: email, tel, indirizzo, P.IVA, ragione sociale |
| F19 | Script fade-in | Stabile | OK |

---

## SEZIONE 2 — Design System da Applicare

Fonte primaria: `visione-sito.md` (brief cliente) + `appunti-stile.md` (analisi 4 siti).

### 2.1 Palette — modifiche a F1

Aggiungere a `:root` in F1. Non rimuovere nulla di esistente.

| Variabile CSS | Hex | Uso dichiarato dalla cliente |
|---|---|---|
| `--zafferano` | `#C8860A` | Dettagli tipografici, tag categorie blog |
| `--terracotta` | `#B5603A` | Sfumature di sfondo, accenti organici |
| `--viola-incenso` | `#7B5EA7` | Categoria Filosofia/Mito nel blog |
| `--salvia-bg` | `#E8EDE6` | Sfondo alternativo sezioni (ispirato Flora Danica) |
| `--seppia` | `#3D2B1F` | Testo corpo alternativo — più caldo del nero puro |

### 2.2 Tipografia — modifiche a F0

Aggiungere `Space Mono` (400, 700) al link Google Fonts. Usare per: note, schede botaniche, dettagli tecnici, formule molecolari, dati scientifici nel blog.

### 2.3 Immagini — modifica F12 (hero) e F13 (chi sono)

La cliente ha dichiarato esplicitamente: nessuna foto stock classica. Vuole macro botaniche atmosferiche: vetri, resine che colano, spezie in polvere, fumo d'incenso, ombre naturali, trasparenze. Luce di taglio, inquadrature decentrate, grana analogica, sfocato. Generare immagini AI in stile Fischersund con palette calda. Sostituire con foto reali quando Raffaella le invierà.

### 2.4 Spaziatura — modifiche a F3-F8

La cliente vuole pagine ariose come un libro d'arte. Aumentare padding sezioni: da `80px 28px` a `120px 28px` mobile, `140px 72px` desktop.

### 2.5 Transizioni — modifica a F10

La cliente vuole calma e lentezza. Transizioni attuali: 0.65s. Target: fade-in 0.8s, hover 0.4s, easing `cubic-bezier(0.23, 1, 0.32, 1)`.

### 2.6 Stile Servizi — modifica a F6

Le card attuali sono troppo corporate. Raffaella vuole elementi tattili e organici: bordi sottilissimi, nessun box rigido, testo che respira, nessun colore di sfondo sulle card.

---

## SEZIONE 3 — Fasi di Esecuzione con Logica RLM

Ogni fase dichiara: input, blocchi coinvolti, dipendenze, output atteso, condizione di STOP.

---

### FASE A — Palette e Font (Design System base)

```
INPUT:
  - F1 (CSS :root attuale)
  - F0 (link Google Fonts attuale)
  - appunti-stile.md §2.1 e §2.2

BLOCCHI COINVOLTI: F0, F1
DIPENDENZE: F0 e F1 sono la base di tutto — modificarli prima di qualsiasi altro blocco
IMPATTO A CASCATA: nessuno (si aggiungono variabili, non si modificano quelle esistenti)

PASSI ATOMICI:
  [1] Leggere F1 attuale (righe 13-25 di index.html)
  [2] Aggiungere 5 variabili colore in fondo a :root senza rimuovere nulla
  [3] Leggere F0 attuale (riga 11 di index.html)
  [4] Aggiungere Space Mono al link Google Fonts
  [5] Verificare che il file si carichi senza errori

OUTPUT ATTESO: index.html con 5 nuove variabili CSS e Space Mono disponibile
CONDIZIONE DI STOP: se il file non si carica → rollback F0/F1 e chiedere a Giorgio
```

---

### FASE B — Spaziatura e Transizioni

```
INPUT:
  - F3-F8 (CSS sezioni)
  - F10 (CSS responsive)
  - visione-sito.md: "pagine ariose", "calma e lentezza"

BLOCCHI COINVOLTI: F3, F4, F5, F6, F8, F10
DIPENDENZE: F1 deve essere aggiornato (FASE A completata)
IMPATTO A CASCATA: F10 va aggiornato dopo per allineare il responsive

PASSI ATOMICI:
  [1] Leggere F3-F8 attuali
  [2] Aggiornare padding sezioni: 120px mobile, 140px desktop
  [3] Aggiornare fade-in in F10: da 0.65s a 0.8s con easing morbido
  [4] Aggiornare hover states: da 0.2s a 0.4s
  [5] Verificare visivamente che le sezioni respirino

OUTPUT ATTESO: sezioni più ariose, transizioni più lente e fluide
CONDIZIONE DI STOP: se il layout si rompe su mobile → rollback F10 e chiedere a Giorgio
```

---

### FASE C — Stile Servizi (de-corporatizzazione)

```
INPUT:
  - F6 (CSS servizi attuale)
  - F15 (HTML servizi attuale)
  - visione-sito.md: "tattile e organico", "linee sottili"

BLOCCHI COINVOLTI: F6, F15
DIPENDENZE: FASE A completata (nuovi colori disponibili)
IMPATTO A CASCATA: nessuno

PASSI ATOMICI:
  [1] Leggere F6 e F15 attuali
  [2] Rimuovere bordi rigidi dalle card
  [3] Aumentare line-height e letter-spacing del testo
  [4] Usare --seppia per il testo corpo al posto di --grigio
  [5] Verificare che i 3 servizi siano leggibili e organici

OUTPUT ATTESO: card servizi tattili, senza box rigidi, testo che respira
CONDIZIONE DI STOP: se il testo diventa illeggibile → rollback F6 e chiedere a Giorgio
```

---

### FASE D — Immagini Botaniche (Hero e Chi Sono)

```
INPUT:
  - F12 (HTML hero — foto attualmente base64 AI generica)
  - F13 (HTML chi sono — manca foto)
  - visione-sito.md: "macro botaniche, resine, spezie, fumo d'incenso, grana analogica"
  - appunti-stile.md: pattern Fischersund (hero full-bleed)

BLOCCHI COINVOLTI: F12, F13
DIPENDENZE: FASE A completata (palette disponibile per overlay colore)
IMPATTO A CASCATA: F3 (CSS hero) potrebbe richiedere aggiustamenti overlay

PASSI ATOMICI:
  [1] Generare 3 immagini AI: (a) macro botanica hero, (b) spezie/resine per chi sono, (c) fumo/trasparenze per collaborazioni
  [2] Caricare le immagini con manus-upload-file --webdev
  [3] Sostituire la foto base64 in F12 con URL immagine caricata
  [4] Aggiungere foto in F13 (chi sono)
  [5] Verificare contrasto testo/immagine (testo chiaro su immagine scura)

OUTPUT ATTESO: hero con immagine macro botanica atmosferica, chi sono con foto evocativa
CONDIZIONE DI STOP: se le immagini non si caricano → mantenere placeholder e segnalare a Giorgio
NOTA: queste immagini sono provvisorie — sostituire con foto reali di Raffaella quando disponibili
```

---

### FASE E — Sezione Collaborazioni (F16 + F7)

```
INPUT:
  - contenuti-cliente.md (13 testi narrativi completi)
  - F7 (CSS credibilità — attualmente placeholder)
  - F16 (HTML credibilità — attualmente placeholder)
  - appunti-stile.md: layout editoriale, non card corporate

BLOCCHI COINVOLTI: F7, F16
DIPENDENZE: FASE A completata (nuovi colori disponibili)
IMPATTO A CASCATA: F10 (responsive) va verificato dopo

PASSI ATOMICI:
  [1] Leggere tutti i 13 testi da contenuti-cliente.md
  [2] Progettare layout editoriale: titolo collaborazione + testo narrativo + linea sottile separatrice
  [3] Scrivere CSS F7 per layout editoriale (no card, no box)
  [4] Inserire i 13 testi in F16 con markup semantico
  [5] Aggiungere anche la GENESI (biografia) come introduzione alla sezione
  [6] Verificare leggibilità e respiro su mobile e desktop

OUTPUT ATTESO: sezione collaborazioni con 13 voci narrative reali, layout da rivista
CONDIZIONE DI STOP: se il testo è illeggibile su mobile → rollback F7 e chiedere a Giorgio
```

---

### FASE F — Blog / Archivio "Ti Odoro"

```
INPUT:
  - visione-sito.md: "griglia stile rivista, categorie colorate, Molecole/Storia/Letteratura/Neuroscienza/Mito/Filosofia"
  - appunti-stile.md: pattern Nez/Bynez
  - FASE A completata (colori categorie disponibili)

BLOCCHI COINVOLTI: nuova pagina (non tocca index.html)
DIPENDENZE: FASE A completata
IMPATTO A CASCATA: nessuno su index.html

PASSI ATOMICI:
  [1] Creare blog.html con struttura griglia rivista
  [2] Definire 6 categorie con colori: Molecole (smeraldo), Storia (oro), Letteratura (terracotta), Neuroscienza (salvia), Mito (viola-incenso), Filosofia (seppia)
  [3] Creare template articolo con: testo spaziato, box citazione, scheda olfattiva in Space Mono
  [4] Inserire articoli placeholder (da sostituire con testi reali di Raffaella)
  [5] Collegare dal menu nav e dalla home

OUTPUT ATTESO: pagina blog funzionante con griglia e categorie colorate
CONDIZIONE DI STOP: aspettare testi reali da Raffaella prima di pubblicare
MATERIALE MANCANTE: testi articoli "Ti Odoro" già pubblicati su Treviso Città e Storie
```

---

### FASE G — Pagina Corsi / Laboratori

```
INPUT:
  - visione-sito.md: "pagina dedicata ai corsi, ai laboratori e alle esperienze sensoriali"
  - Testi: NON ANCORA RICEVUTI da Raffaella

BLOCCHI COINVOLTI: nuova pagina
DIPENDENZE: FASE A completata. BLOCCATA su contenuti.

PASSI ATOMICI:
  [1] STOP — aspettare testi da Raffaella
  [2] Quando ricevuti: creare corsi.html con layout simile a blog
  [3] Collegare dal menu nav e dalla home

OUTPUT ATTESO: pagina corsi con descrizioni esperienze sensoriali
CONDIZIONE DI STOP: non procedere senza testi reali
MATERIALE MANCANTE: testi corsi/laboratori/esperienze sensoriali
```

---

### FASE H — SEO

```
INPUT:
  - seo-keywords.md (19 parole chiave)
  - F0 (meta description attuale)
  - F12-F17 (testi delle sezioni)

BLOCCHI COINVOLTI: F0, F12, F13, F14, F15, F16, F17
DIPENDENZE: FASI E, F completate (contenuti reali inseriti prima di ottimizzare SEO)
IMPATTO A CASCATA: nessuno visivo

PASSI ATOMICI:
  [1] Aggiornare meta description in F0 con parole chiave prioritarie
  [2] Aggiungere meta keywords
  [3] Verificare che H1/H2 contengano parole chiave naturalmente
  [4] Aggiungere alt text alle immagini con parole chiave
  [5] Verificare title tag

OUTPUT ATTESO: sito ottimizzato per "Ricercatrice olfattiva", "Narratrice di cultura olfattiva", "Divulgazione culturale profumi"
CONDIZIONE DI STOP: nessuna — operazione non distruttiva
```

---

### FASE I — Integrazione Instagram (Fase 2)

```
INPUT:
  - visione-sito.md: "mi piacerebbe potesse parlare con instagram"
  - Link Instagram reale: NON ANCORA RICEVUTO da Raffaella

BLOCCHI COINVOLTI: F18 (footer), nuova sezione home
DIPENDENZE: link Instagram reale da Raffaella

PASSI ATOMICI:
  [1] STOP — aspettare link Instagram da Raffaella
  [2] Valutare approccio: embed feed (richiede token API) vs link semplice
  [3] Implementare quando materiale disponibile

CONDIZIONE DI STOP: non procedere senza link reale
MATERIALE MANCANTE: link Instagram e LinkedIn reali
```

---

### FASE J — Musica Ambient (Fase 2)

```
INPUT:
  - visione-sito.md: "una parte musicale un po tipo le musiche di Dark serie televisiva"

BLOCCHI COINVOLTI: F19 (script) o nuovo blocco F20
DIPENDENZE: nessuna tecnica — decisione di UX da validare con Giorgio

PASSI ATOMICI:
  [1] Valutare impatto UX: musica autoplay è invasiva — proporre toggle on/off
  [2] Trovare/generare traccia ambient stile Dark (drone, sintetizzatori, atmosfera)
  [3] Implementare player nascosto con pulsante toggle discreto
  [4] Rispettare prefers-reduced-motion e autoplay policy browser

CONDIZIONE DI STOP: validare con Giorgio prima di implementare
```

---

## SEZIONE 4 — Materiali Mancanti da Raffaella

| Materiale | Urgenza | Blocca quale fase |
|---|---|---|
| Foto professionale reale (ritratto) | Alta | FASE D — sostituisce immagine AI |
| Foto contesto/atelier (2-3 immagini) | Alta | FASE D |
| Loghi brand collaboratori | Media | FASE E |
| Testi articoli "Ti Odoro" già pubblicati | Media | FASE F |
| Testi corsi/laboratori/esperienze | Media | FASE G — BLOCCANTE |
| Link Instagram reale | Media | FASE I — BLOCCANTE |
| Link LinkedIn reale | Bassa | F18 footer |

---

## SEZIONE 5 — Ordine di Esecuzione

```
FASE A → FASE B → FASE C → FASE D → FASE E → FASE F → FASE H
                                                        ↓
                                              FASE G (bloccata su testi)
                                              FASE I (bloccata su Instagram)
                                              FASE J (da validare con Giorgio)
```

Le fasi A-E sono eseguibili subito. F-H dipendono da contenuti. G, I, J sono bloccate su materiali mancanti.

---

## SEZIONE 6 — Regole Operative RLM

Ogni intervento sul codice deve seguire questo protocollo prima di toccare qualsiasi file:

**Dichiarazione obbligatoria prima di ogni modifica:**
> "Blocchi coinvolti: F[n] — Dipende da: F[m] — Impatto a cascata: [lista o nessuno] — Output atteso: [descrizione] — Procedo."

**Condizioni di STOP automatico:**
- Stesso errore per 2 volte consecutive → STOP, cambio approccio, chiedo a Giorgio
- Modifica che tocca più di 3 blocchi contemporaneamente → STOP, suddivido in sotto-fasi
- File non si carica dopo modifica → rollback immediato via git checkout

**Commit obbligatorio dopo ogni fase completata.**

---

*Blueprint v2.0 — RLM applicato — Giorgio Vidali + Manus AI — 2026-07-21*
