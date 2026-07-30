# BRIEF — Raffaella Pisani Sito Web
*Documento di riferimento permanente — aggiornato il 30 luglio 2026*

---

## 1. Richiesta della cliente (verbatim dal socio)

> "Per quanto riguarda il sito lei insiste che vuole un cambio cromatico. Non vuole i bianchi di fondo ma un colore tortora o grigio ma non bianco. Poi ok foto botaniche e ok revisione testi con approccio B2B in qualche parte. Per la parte dicono di noi la Community è una strada OK anche per lei."

---

## 2. Siti di riferimento forniti dalla cliente

| Sito | URL | Cosa vuole prendere |
|---|---|---|
| **Fischersund** | https://www.fischersund.com | Atmosfera, profondità, sfondi scuri, minimalismo viscerale |
| **Olfattorio** | https://www.olfattorio.it | Eleganza italiana, struttura editoriale |
| **Meo Fusciuni** | https://www.meofusciuni.com | Poetica, emozione, testo come centro |
| **Monom Profumi** | https://monom-profumi.com | Minimalismo contemporaneo italiano |

---

## 3. Analisi palette dei siti di riferimento

### Fischersund
- Sfondo body: **nero puro** `rgb(0,0,0)` = `#000000`
- Testo: **bianco** `rgb(255,255,255)` = `#FFFFFF`
- Nav: trasparente su nero
- Nessun colore brand — solo nero/bianco/grigio
- **Sensazione:** minimalismo radicale, profondità assoluta, fotografia come protagonista

### Olfattorio
- Sfondo body: **bianco** `rgb(255,255,255)`
- Testo: **grigio medio** `rgb(119,119,119)` = `#777777`
- Header: bianco
- **Sensazione:** commerciale, pulito, e-commerce classico — meno rilevante per Raffaella

### Meo Fusciuni
- Sfondo body: trasparente (su nero)
- Testo: nero
- Header: **bianco** `rgb(255,255,255)`
- Footer: **nero** `rgb(0,0,0)`
- Sezioni: **nero** `rgb(0,0,0)` con testo bianco
- **Sensazione:** teatrale, drammatico, nero totale con testo bianco — molto simile a Fischersund

### Monom Profumi
- Sfondo body: **bianco** `rgb(255,255,255)`
- Testo: **quasi nero** `rgb(36,36,36)` = `#242424`
- Sezioni: alternanza bianco / quasi nero
- **Sensazione:** minimalismo italiano contemporaneo, sobrio

---

## 4. Match: richiesta cliente ↔ siti di riferimento

La cliente vuole:
1. **No bianchi di fondo** → tutti i siti di riferimento evitano il bianco puro come sfondo dominante
2. **Tortora o grigio** → nessuno dei siti usa esattamente il tortora, ma Fischersund e Meo Fusciuni usano il **nero profondo** come sfondo delle sezioni emotive
3. **Sensazione Fischersund** → profondità, materia, non commerciale

**Interpretazione corretta:**
La cliente non vuole un sito bianco/beige commerciale. Vuole **profondità cromatica**.
Il tortora/grigio che chiede è la sua versione "calda" del nero di Fischersund:
non nero puro (troppo freddo/tech), ma un **marrone scuro caldo** o **grigio antracite caldo** che dia la stessa sensazione di profondità senza essere un sito di moda.

---

## 5. Palette proposta — SOLUZIONE

```css
/* Sfondi sezioni emotive (hero, visione, contatti) */
--profondo:     #2C2420;   /* marrone scuro caldo — "nero di Raffaella" */

/* Sfondi sezioni di testo (chi sono, servizi) */
--carta:        #D8D2C8;   /* tortora medio — già applicato ✅ */
--avorio:       #CEC8BC;   /* tortora scuro — già applicato ✅ */

/* Accento */
--oro:          #A8895A;   /* oro caldo — linee, label, accenti */

/* Testo */
--inchiostro:   #1A2420;   /* quasi nero con nota verde scura */
```

---

## 6. Decisioni approvate (30 luglio 2026)

- [x] Sfondi bianchi/beige → tortora `#D8D2C8` / `#CEC8BC` (**fatto**)
- [ ] Sfondi sezioni emotive (hero, visione, contatti) → `#2C2420` marrone scuro caldo
- [ ] Inserire foto botaniche nelle sezioni principali
- [ ] Revisione testi B2B in sezioni chiave
- [ ] Sezione "Dicono di Me" → "Community"

---

## 7. File presenti nel repo

| File | Contenuto |
|---|---|
| `index.html` | Sito principale (unico file) |
| `BLUEPRINT.md` | Architettura e blocchi F del sito |
| `appunti-stile.md` | Analisi siti di riferimento precedenti (Fischersund, Mad et Len, Nez, Flora Danica) |
| `DECISIONI_STRATEGICHE_30_LUGLIO.md` | Decisioni emerse dalla call del 30 luglio |
| `RiflessionestrategicasulposizionamentoB2BdiRaffaellaPisani.pdf` | Documento strategico completo |
| `contenuti-cliente.md` | Testi originali della cliente |
| `DICONO_DI_ME.md` | Testimonianze per sezione Community |
| `immagini-redesign/` | 52 foto botaniche approvate |
| `galleria-fotografica/` | Galleria attuale del sito |

---
*Aggiornare questo file ad ogni nuova decisione o materiale ricevuto.*
## 8. Task operativi — da analisi Perplexity (30 luglio 2026)

*Fonte: `AnalisiPercezione_Redesign_RaffaellaPisani.pdf`*
*Riferimento primario: Meo Fusciuni — Riferimento secondario: Fischer Sund*

### PRIORITÀ 1 — Bug tecnici (da correggere prima di qualsiasi intervento estetico)
- [ ] **T01** — Correggere link "Galleria" nel menu: punta a `#galleria` inesistente nel DOM
- [ ] **T02** — Rimuovere CSS grezzo esposto come testo nel footer (errore di build)
- [ ] **T03** — Rimuovere o ridisegnare widget PWA flottanti ("CONDIVIDI", "INSTALLA APP", "REFRESH") — stonano con il tono curato del sito

### PRIORITÀ 2 — Palette e colori
- [ ] **T04** — Introdurre almeno una sezione a **fondo nero pieno** `#0D0D0B` con testo bianco — per i momenti manifesto (citazione d'apertura, sezione Visione) — da Fischer Sund
- [ ] **T05** — Aggiungere **accenti oro/ambra più decisi sul nero** (non solo sul beige) — da Meo Fusciuni
- [ ] **T06** — Mantenere palette botanica esistente (salvia/carta/oro) nelle sezioni di testo — già ok

### PRIORITÀ 3 — Credibilità visiva
- [ ] **T07** — Trasformare l'elenco testuale di collaborazioni in una **barra loghi** (stile press wall Fischer Sund) — impatto istituzionale immediato
- [ ] **T08** — Raccogliere loghi delle collaborazioni reali (Puntoettore, Deha–Pitti, Cerasa–Salone del Mobile, Semenzato, Monom, MCZ Group, Rotary)

### PRIORITÀ 4 — Fotografia
- [ ] **T09** — Introdurre **ritratto di Raffaella in bianco e nero ad alto contrasto** (stile caravaggesco, come Meo Fusciuni) per la sezione "Chi Sono" — usare le foto in `foto-raffaella/`
- [ ] **T10** — Mantenere fotografia botanica a colori esistente nelle altre sezioni — già ok

### PRIORITÀ 5 — Tipografia
- [ ] **T11** — Mantenere contrasto serif/sans già presente — già ok, non toccare
- [ ] **T12** — Verificare che serif elegante sia usato solo per citazioni/manifesto (non per testo corrente)

### DA EVITARE
- Griglie prodotto, badge prezzo, tipografia sans-serif senza contrappunto serif (da Monom — non adatto)
- Widget decorativi non necessari
- Estetica "spa/wellness" — bilanciare verde salvia con momenti a nero pieno

---
## 9. Task operativi — da documento strategico B2B (collaboratore)

*Fonte: `RiflessionestrategicasulposizionamentoB2BdiRaffaellaPisani.pdf`*

### PRIORITÀ 1 — Proposta di valore esplicita
- [ ] **T13** — Inserire nell'hero o subito sotto una **frase di posizionamento B2B chiara**: "Raffaella Pisani aiuta i brand di profumeria artistica a rafforzare la propria narrazione attraverso cultura olfattiva, eventi, formazione e contenuti."
- [ ] **T14** — La frase deve essere leggibile in 5 secondi da un decision maker — non solo evocativa

### PRIORITÀ 2 — Servizi riconoscibili
- [ ] **T15** — Rendere visibili le **aree di intervento** in modo esplicito: ambassador, consulenza culturale/narrativa, eventi olfattivi, formazione team/boutique/reti vendita, contenuti editoriali, percorsi esperienziali, collaborazioni con brand/luoghi culturali/hospitality
- [ ] **T16** — Ogni servizio deve rispondere alla domanda: "Cosa può fare Raffaella per il mio brand?"

### PRIORITÀ 3 — Credenziali concrete
- [ ] **T17** — Trasformare l'elenco testuale di collaborazioni in elementi visivi solidi (loghi + breve descrizione del ruolo svolto)
- [ ] **T18** — Aggiungere almeno una **mini case history**: contesto → cosa ha fatto Raffaella → valore generato

### PRIORITÀ 4 — Differenziazione esplicita
- [ ] **T19** — Dichiarare con forza la differenziazione: "sguardo culturale, interdisciplinare e metodologico che collega profumo, memoria, percezione, botanica, arte e narrazione" — non solo "racconto il profumo in modo poetico"

### PRIORITÀ 5 — Tono: da ricerca aperta a competenza autorevole
- [ ] **T20** — Rivedere i testi che suonano come "sto cercando un linguaggio" → riscrivere come "ho costruito un metodo per aiutare i brand"
- [ ] **T21** — Mantenere voce poetica ma aggiungere autorevolezza — non appiattire, non rendere aziendale

### PRIORITÀ 6 — Sezione Community
- [ ] **T22** — Rinominare "Dicono di Me" → "Community"
- [ ] **T23** — Riscrivere come comunità di interesse attorno alla cultura olfattiva, non lista di apprezzamenti personali
- [ ] **T24** — Aggiungere CTA per iscriversi/essere aggiornati sulle prossime attività
- [ ] **T25** — Le testimonianze restano come supporto laterale, non come centro del posizionamento
- [ ] **T26** — Evitare tono troppo affettivo/personale — deve sembrare partecipazione, non amicizia

---
