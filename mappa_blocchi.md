# Mappa Blocchi F — Raffaella Pisani (Cultura Olfattiva)

**Fonte di verità per la numerazione project-wide univoca.**
Protocollo: `blocchi-f-operativo` v2.0 | Aggiornato: 2026-07-21

---

## Blocchi CSS (index.html, tag `<style>`)

| Blocco | File | Riga | Responsabilità | Dipende da | Status | Last modified |
|--------|------|------|-----------------|-----------|--------|---------------|
| **F0** | index.html | 1-30 | Meta tag, PWA manifest, fonts, canonical | nessuno | STABLE | 2026-07-21 |
| **F1** | index.html | 32 | Reset, variabili CSS, tipografia base | F0 | STABLE | 2026-07-21 |
| **F2** | index.html | 65 | CSS Nav — navigazione, logo, menu | F1 | STABLE | 2026-07-21 |
| **F3** | index.html | 103 | CSS Hero — layout split, foto, testo | F1 | STABLE | 2026-07-21 |
| **F4** | index.html | 241 | CSS Chi Sono — identità, testo, foto 1-2 | F1 | STABLE | 2026-07-21 |
| **F5** | index.html | 259 | CSS Visione — tre parole, card, foto 3 | F1 | STABLE | 2026-07-21 |
| **F6** | index.html | 293 | CSS Servizi — 3 card, foto 4-5 | F1 | STABLE | 2026-07-21 |
| **F7** | index.html | 447 | CSS Collaborazioni — griglia narrativa | F1 | STABLE | 2026-07-21 |
| **F7-ext** | index.html | 488 | CSS Testimonianze — card citazioni, grid 2-3 colonne | F1 | STABLE | 2026-07-23 |
| **F8** | index.html | 517 | CSS Footer — logo, info, copyright | F1 | STABLE | 2026-07-21 |
| **F9** | index.html | 540 | CSS Responsive — media queries mobile/tablet | F1-F8 | STABLE | 2026-07-21 |

---

## Blocchi PWA

| Blocco | File | Riga | Responsabilità | Dipende da | Status | Last modified |
|--------|------|------|-----------------|-----------|--------|---------------|
| **F10** | index.html | 664 | CSS Barra azioni fissa bottom — 3 pulsanti | F1 | STABLE | 2026-07-21 |
| **F11** | index.html | 718 | CSS Modali PWA (Condividi, Installa) | F1, F10 | STABLE | 2026-07-21 |
| **F12** | pwa-action-bar.js | — | JS Logica pulsanti PWA | F10, F11 | STABLE | 2026-07-21 |
| **F13** | index.html | 569 | CSS Cookie Bar GDPR | F1 | STABLE | 2026-07-21 |
| **F14** | gdpr-cookies.js | — | JS Logica cookie consent | F13 | STABLE | 2026-07-21 |

---

## Blocchi Metadata e Service Worker

| Blocco | File | Responsabilità | Dipende da | Status | Last modified |
|--------|------|-----------------|-----------|--------|---------------|
| **F15** | manifest.json | PWA Manifest — configurazione app | F0 | STABLE | 2026-07-21 |
| **F16** | sw.js | Service Worker — caching offline | F15 | STABLE | 2026-07-21 |
| **F17** | index.html | 945 | Registrazione Service Worker | F16 | STABLE | 2026-07-21 |

---

## Blocchi HTML (Sezioni)

| Blocco | File | Riga | Responsabilità | Dipende da | Status | Last modified |
|--------|------|------|-----------------|-----------|--------|---------------|
| **F18** | index.html | 948 | Sezione Hero — foto + testo smeraldo | F3 | STABLE | 2026-07-21 |
| **F19** | index.html | 966 | Sezione Chi Sono — identità + foto 1-2 | F4 | STABLE | 2026-07-21 |
| **F20** | index.html | 991 | Sezione Visione — 3 valori + foto 3 | F5 | STABLE | 2026-07-21 |
| **F21** | index.html | 1019 | Sezione Servizi — 3 card + foto 4-5 | F6 | STABLE | 2026-07-21 |
| **F22** | index.html | 1051 | Sezione Credibilità — collaborazioni + foto 6 | F7 | STABLE | 2026-07-21 |
| **F23** | index.html | 1130 | Sezione Galleria — 8 immagini (deprecated) | — | TODO | 2026-07-21 |
| **F26** | index.html | 1224 | Sezione Dicono di Me — 12 testimonianze in grid | F7-ext | STABLE | 2026-07-23 |
| **F24** | index.html | 1333 | Sezione Contatti — form + foto 7-8 | F6 | STABLE | 2026-07-23 |
| **F25** | index.html | 1200+ | Footer — logo, info, copyright | F8 | STABLE | 2026-07-21 |

---

## Grafo Dipendenze (Completo)

```
F0 (Meta, Fonts, Canonical)
│
F1 (Reset, Variabili CSS)
├── F2 (Nav)
├── F3 (Hero) → F18 (HTML Hero)
├── F4 (Chi Sono) → F19 (HTML Chi Sono)
├── F5 (Visione) → F20 (HTML Visione)
├── F6 (Servizi) → F21 (HTML Servizi)
├── F7 (Collaborazioni) → F22 (HTML Credibilità)
├── F7-ext (Testimonianze CSS) → F26 (HTML Dicono di Me)
├── F8 (Footer) → F25 (HTML Footer)
└── F9 (Responsive) → tutti F2-F8

F10 (Barra PWA)
├── F11 (Modali PWA)
├── F12 (JS PWA)
└── F9 (Responsive)

F13 (Cookie Bar)
├── F14 (JS Cookie)
└── F9 (Responsive)

F15 (Manifest)
├── F16 (Service Worker)
└── F17 (Registrazione SW)
```

---

## Regole di Modifica (blocchi-f-operativo)

1. **Numerazione univoca** — nessun numero può ripetersi
2. **Dipendenze** — sempre dichiarare i blocchi da cui dipende
3. **Status** — aggiornare a ogni modifica (STABLE → WIP → STABLE)
4. **Last modified** — data ISO (YYYY-MM-DD)
5. **Comunicazione** — Giorgio dice "F18 riga 45", Manus legge solo F18
6. **Header strutturato** — ogni blocco deve avere commento con ID, responsabilità, dipendenze, status

---

## Vocabolario Condiviso

| Dici | Intendi | Blocco |
|------|---------|--------|
| "Nav" o "menu" | Menu in alto con logo e link | F2 + F18 |
| "Hero" | Sezione principale con foto e pannello verde | F3 + F18 |
| "Chi Sono" | Prima sezione sotto la hero | F4 + F19 |
| "Visione" | Sezione Accoglienza/Cultura/Ascolto | F5 + F20 |
| "Servizi" | Le 3 card dei servizi | F6 + F21 |
| "Credibilità" | Sezione collaborazioni | F7 + F22 |
| "Dicono di me" | Sezione testimonianze 12 card | F7-ext + F26 |
| "Contatti" | Form e CTA finale | F24 |
| "Footer" | Piè di pagina | F8 + F25 |
| "PWA" | Pulsanti Condividi/Installa/Refresh | F10-F12 |
| "Cookie" | Cookie bar GDPR | F13-F14 |

---

**Ultimo aggiornamento:** 2026-07-23 | **Versione:** 2.1 (F26 Testimonianze aggiunto)
