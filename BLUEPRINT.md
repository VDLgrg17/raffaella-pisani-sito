# BLUEPRINT — Sito Raffaella Pisani
**Versione:** 1.0 | **Data:** 2026-07-21 | **Stato:** In lavorazione

> Documento master di progetto. Contiene tutto ciò che dobbiamo fare, in quale ordine e con quale priorità. Basato interamente sul materiale fornito dalla cliente. Non modificare il codice senza aver verificato questo file.

---

## 1. Identità del Progetto

**Chi è Raffaella Pisani:** Ricercatrice e divulgatrice di cultura olfattiva. Non vende profumi: racconta l'olfatto come linguaggio culturale, sensoriale e poetico. Figlia d'arte con oltre 30 anni di esperienza, collaborazioni con Cerasa, Monom, MCZ Group, Pitti, università, riviste culturali.

**Ragione sociale:** Sensi di Strati di Pisani Raffaella | P.IVA 05581330262 | Via Po 14/A, Fontane di Villorba (TV)

**Obiettivo del sito:** Posizionarla come figura intellettuale di riferimento nella profumeria artistica italiana. Non un portfolio, non un e-commerce: un luogo editoriale dove chi arriva capisce immediatamente chi è e cosa fa.

---

## 2. Struttura del Sito — Pagine da Costruire

| # | Pagina | Stato | Contenuti disponibili | Note |
|---|---|---|---|---|
| 1 | **Home** | Parziale | Hero + frase gancio presenti | Manca sezione Manifesto e anteprima articoli/corsi |
| 2 | **Chi sono** | Parziale | Testo presente | Manca foto reale professionale |
| 3 | **Visione** | Parziale | 3 pilastri presenti | Stile da rivedere (troppo compatto) |
| 4 | **Servizi** | Parziale | 3 servizi presenti | Stile da rivedere (troppo corporate) |
| 5 | **Collaborazioni** | Da costruire | 13 testi reali ricevuti | Sezione attualmente placeholder |
| 6 | **Blog / Archivio "Ti Odoro"** | Da costruire | Rubrica bimestrale su Treviso Città e Storie | Griglia rivista + categorie colorate |
| 7 | **Corsi / Laboratori** | Da costruire | Nessun testo ancora ricevuto | Aspettare contenuti da Raffaella |
| 8 | **Contatti** | Fatto | Email + tel + indirizzo reali | Form da collegare a un endpoint reale |
| 9 | **Footer** | Fatto | Dati reali inseriti | OK |

---

## 3. Design System — Modifiche da Applicare

### 3.1 Palette colori (F1 — `:root`)

Colori attuali: carta di riso, smeraldo, oro, inchiostro, salvia. Mancano i pigmenti naturali richiesti da Raffaella.

| Variabile | Valore | Uso |
|---|---|---|
| `--zafferano` | `#C8860A` | Accenti caldi, tag categorie blog |
| `--terracotta` | `#B5603A` | Dettagli organici, hover states |
| `--viola-incenso` | `#7B5EA7` | Categoria Filosofia/Mito nel blog |
| `--salvia-bg` | `#E8EDE6` | Sfondo alternativo nordico (ispirato Flora Danica) |
| `--seppia` | `#3D2B1F` | Testo alternativo più caldo del nero puro |

### 3.2 Tipografia (F0 — Google Fonts)

Aggiungere `Space Mono` (400, 700) per note, schede botaniche, dettagli tecnici (formule molecolari, dati scientifici). Usato in tutta la sezione Blog per i dettagli di approfondimento olfattivo.

### 3.3 Immagini — Hero e sezioni

La hero attuale ha una foto AI generica. Raffaella vuole:
- Immagini macro botaniche atmosferiche: vetri, resine che colano, spezie in polvere, fumo d'incenso, ombre naturali, trasparenze
- Luce di taglio, inquadrature decentrate, grana analogica, sfocato
- Nessuna foto stock classica

**Azione:** generare immagini AI botaniche atmosferiche per hero, sezione Chi sono, sezione Collaborazioni. Aspettare foto reali da Raffaella per sostituirle definitivamente.

### 3.4 Spaziatura e respiro (F3-F8)

Le sezioni attuali sono troppo compatte. Raffaella vuole pagine ariose come un libro d'arte o una rivista d'autore. Aumentare `padding` delle sezioni da 80px a 120px desktop, 96px mobile.

### 3.5 Transizioni (F10)

Transizioni attuali: 0.65s. Raffaella vuole 500-800ms con easing morbido, quasi impercettibile. Aggiornare fade-in e hover states.

### 3.6 Stile card Servizi (F6)

Le card attuali sono troppo "corporate". Raffaella vuole elementi tattili e organici: bordi sottili, nessun box rigido, testo che respira.

---

## 4. Sezione Collaborazioni — Contenuti Reali Ricevuti

Tredici collaborazioni con testi narrativi completi disponibili in `contenuti-cliente.md`. Da inserire in F16 con layout editoriale (non lista, non card corporate).

| # | Nome | Tipo di collaborazione |
|---|---|---|
| 1 | Puntoettore | Spazio fragranze, salotto alternativo, eventi |
| 2 | Puntoettore Studio (Treviso) | Continuità concept, eventi a tema |
| 3 | Meeting/Deha (Pitti) | Stand danza + profumo + musica + video |
| 4 | Cerasa (Salone del Mobile) | Identità olfattiva showroom Milano |
| 5 | Temacultura | Teatro, movimento, profumo, pubblicazione universitaria |
| 6 | Noesi | 3 fragranze tematiche per brand borse |
| 7 | Michele Marin | Evento design + Warhol + Velvet Underground |
| 8 | Rotary Castelfranco | Serata sinestetica profumi/colori/storie |
| 9 | Treviso Città e Storie | Rubrica bimestrale "Ti Odoro" |
| 10 | Semenzato | Direzione artistica nascita profumeria |
| 11 | Monom | Ambasciatrice brand |
| 12 | MCZ Group | Stand camini, esperienza immersiva multisensoriale |
| 13 | Profumerie artistiche | Piccoli eventi divulgativi sul territorio |

---

## 5. Blog / Archivio "Ti Odoro"

Layout griglia stile rivista (ispirato a Nez/Bynez). Categorie con colori identificativi:

| Categoria | Colore |
|---|---|
| Molecole | `--smeraldo` |
| Storia | `--oro` |
| Letteratura | `--terracotta` |
| Neuroscienza | `--salvia` |
| Mito | `--viola-incenso` |
| Filosofia | `--seppia` |

Ogni articolo: testo ben spaziato, box per citazioni in evidenza, schede di approfondimento olfattivo con font `Space Mono`.

**Contenuti:** Raffaella pubblica a cadenza bimestrale su Treviso Città e Storie. Da chiedere i testi degli articoli già pubblicati.

---

## 6. SEO — Parole Chiave da Integrare

Fonte: `seo-keywords.md`. Le 19 parole chiave vanno integrate in:
- Meta description (F0)
- Titoli delle sezioni (H1, H2)
- Testi delle sezioni (corpo)
- Alt text delle immagini

Parole chiave prioritarie: "Ricercatrice olfattiva", "Narratrice di cultura olfattiva", "Divulgazione culturale profumi", "Storytelling per profumeria artistica".

---

## 7. Funzionalità Extra (Fase 2)

| Funzionalità | Priorità | Note |
|---|---|---|
| Integrazione Instagram feed | Media | Raffaella lo ha richiesto esplicitamente |
| Musica ambient in background | Bassa | Stile Dark (serie Netflix). Attivabile/disattivabile dall'utente. Da valutare impatto UX |
| Form contatti collegato a endpoint | Media | Attualmente il form non invia nulla |

---

## 8. Materiali Ancora Mancanti da Raffaella

| Materiale | Urgenza | Blocca |
|---|---|---|
| Foto professionale reale (ritratto) | Alta | Sezione Chi sono, Hero |
| Foto contesto/atelier (2-3 immagini) | Alta | Sezioni varie |
| Loghi brand collaboratori | Media | Sezione Collaborazioni |
| Testi articoli "Ti Odoro" già pubblicati | Media | Blog/Archivio |
| Testi corsi/laboratori | Media | Pagina Corsi |
| Link Instagram reale | Media | Footer, integrazione feed |
| Link LinkedIn reale | Bassa | Footer |

---

## 9. Ordine di Esecuzione Consigliato

| Fase | Attività | Blocchi F coinvolti |
|---|---|---|
| **A** | Aggiornare palette CSS con nuovi colori (zafferano, terracotta, viola, salvia-bg, seppia) | F1 |
| **B** | Aggiungere font Space Mono a Google Fonts | F0 |
| **C** | Aumentare spaziatura sezioni e transizioni | F3-F10 |
| **D** | Generare immagini AI botaniche per hero e sezioni | F3, F4 |
| **E** | Inserire 13 collaborazioni reali nella sezione F16 | F16 |
| **F** | Costruire pagina Blog/Archivio con griglia rivista e categorie | Nuova pagina |
| **G** | Costruire pagina Corsi/Laboratori | Nuova pagina (aspettare testi) |
| **H** | Integrare SEO (meta, alt text, titoli) | F0, F4-F17 |
| **I** | Integrazione Instagram feed | Fase 2 |
| **J** | Musica ambient | Fase 2 |

---

## 10. Riferimenti Visivi

Analisi completa in `appunti-stile.md`. Sintesi:

| Sito | Cosa prendere |
|---|---|
| Fischersund | Hero full-bleed, immagini macro botaniche, letterspacing |
| Mad et Len | Lentezza come valore, serif con corsivo, manifesto |
| Nez/Bynez | Griglia blog stile rivista, categorie colorate, struttura editoriale |
| Flora Danica | Sfondo verde salvia, fotografia botanica con luce naturale |

---

*Blueprint generato da: Giorgio Vidali + Manus AI — 2026-07-21*
