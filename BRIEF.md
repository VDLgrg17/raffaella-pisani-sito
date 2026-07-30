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
