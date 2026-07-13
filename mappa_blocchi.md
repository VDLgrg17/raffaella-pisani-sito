# Mappa Blocchi F — Hero Archivio Olfattivo · Raffaella Pisani

> Protocollo Blocchi F v2.0 attivo. Ogni modifica al codice deve dichiarare i blocchi coinvolti.
> File principale: `hero-archivio.html`
> Ultimo aggiornamento: 2026-07-13

| Blocco | File | Responsabilità | Dipende da | Status | Last modified |
|--------|------|----------------|------------|--------|---------------|
| F0 | hero-archivio.html | Meta, font Google, variabili CSS `:root`, reset globale | nessuno | STABLE | 2026-07-13 |
| F1 | hero-archivio.html | Layout grid principale hero (52% foto / 48% testo) | F0 | STABLE | 2026-07-13 |
| F2 | hero-archivio.html | Colonna foto: cover, filtro sepia, velo ambra-cipria, etichette archivio | F0, F1 | STABLE | 2026-07-13 |
| F3 | hero-archivio.html | Colonna testo: sfondo avorio, texture carta porosa, calore radiale | F0, F1 | STABLE | 2026-07-13 |
| F4 | hero-archivio.html | Scia SVG globale con gocce che attraversa entrambe le colonne | F0, F1 | STABLE | 2026-07-13 |
| F5 | hero-archivio.html | Parole-segno calligrafiche semi-trasparenti (ambra, iris, resina, memoria…) | F0, F3 | STABLE | 2026-07-13 |
| F6 | hero-archivio.html | Intestazione archivio: label "Cultura Olfattiva" + linea ambra + logo SVG | F0, F3 | STABLE | 2026-07-13 |
| F7 | hero-archivio.html | Nome principale serif + sottotitolo Ambassador · Interprete Culturale | F0, F3 | STABLE | 2026-07-13 |
| F8 | hero-archivio.html | Divisore decorativo con goccia ambra | F0, F3 | STABLE | 2026-07-13 |
| F9 | hero-archivio.html | Frase strategica del brand director (posizionamento maison) | F0, F3 | STABLE | 2026-07-13 |
| F10 | hero-archivio.html | Nota di laboratorio: citazione con parentesi graffa e firma R.P. | F0, F3 | STABLE | 2026-07-13 |
| F11 | hero-archivio.html | CTA freccia-linea "Scrivimi" con hover espandibile | F0, F3 | STABLE | 2026-07-13 |
| F12 | hero-archivio.html | Scroll indicator verticale animato | F0, F3 | STABLE | 2026-07-13 |
| F13 | hero-archivio.html | Responsive mobile ≤768px: stacking verticale foto/testo | F1–F12 | STABLE | 2026-07-13 |
| F14 | hero-archivio.html | Struttura HTML DOM completa della hero (markup semantico) | F0 | STABLE | 2026-07-13 |

## Grafo delle dipendenze

```
F0 (config globale)
├── F1 (layout grid)
│   ├── F2 (colonna foto)
│   ├── F3 (colonna testo)
│   │   ├── F5 (parole-segno)
│   │   ├── F6 (intestazione)
│   │   ├── F7 (nome/sottotitolo)
│   │   ├── F8 (divisore goccia)
│   │   ├── F9 (frase strategica)
│   │   ├── F10 (nota laboratorio)
│   │   ├── F11 (CTA)
│   │   └── F12 (scroll indicator)
│   └── F4 (scia SVG globale)
├── F13 (responsive mobile) → dipende da F1–F12
└── F14 (HTML DOM) → struttura che ospita tutti i blocchi
```

## Note operative

- La foto hero è embedded come base64 in F14 (src dell'`<img>`)
- Le texture carta porosa e botanica sono caricate via URL `/manus-storage/`
- F5 (parole-segno): opacità attuale `0.13` — aumentare a `0.20` se poco visibili
- F4 (scia SVG): opacità `0.12` ambra / `0.09` salvia — regolabili in F4
- F13 rompe il layout a 2 colonne in stacking verticale su mobile
