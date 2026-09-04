# Verifica strutturale, interattiva e responsive — Task 9

**Data di verifica:** 4 settembre 2026  
**Perimetro:** F6, F10, F10b, F15, F19 e F24 della sezione Servizi. [1]

> Il Task 9 esegue soltanto verifiche. Non modifica `index.html`, gli stili, gli script, il service worker, la geometria, le immagini o le altre sezioni del sito.

## Esito sintetico

| Area di verifica | Esito |
|---|---|
| Struttura e contratti dei sei accordion | 69 su 69 controlli superati |
| Interazione desktop | 15 su 15 controlli superati |
| Attivazione da tastiera | superata con Invio sul primo comando nativo |
| Console browser durante i test | nessun errore JavaScript rilevato |
| Desktop | `documentWidth=1265` e `viewportWidth=1265` |
| Mobile 390 × 844 | sei pannelli verificati senza overflow orizzontale |
| Difetti dimostrati dai test | nessuno |

## Struttura e accessibilità

Il controllo deterministico ha verificato sei trigger, sei pannelli, sei contenitori e sei identificatori univoci. Ogni accordion possiede un comando `button`, una relazione `aria-controls`, lo stato iniziale `aria-expanded="false"`, un pannello inizialmente nascosto e il proprio contenuto completo.

I sei pannelli rispettano i conteggi attesi di paragrafi, attività e call to action. Nessun pannello introduce immagini o collegamenti aggiunti. Il contratto di F24 continua a sincronizzare classe `open`, attributo `aria-expanded` e attributo `hidden`. [1]

## Interazione

La sequenza browser ha verificato che ciascun comando apre il proprio pannello e che il secondo clic lo richiude. L’apertura di un nuovo servizio chiude il precedente. Un clic esterno chiude tutti i pannelli aperti.

Il primo comando è stato focalizzato come elemento nativo `button` con `type="button"` e attivato mediante il tasto Invio. Il pannello Ambassador ha quindi assunto `aria-expanded="true"`, `hidden=false` e classe `open`.

## Desktop

La sezione Servizi mantiene l’alternanza laterale prevista da F10b. Nella viewport desktop sono presenti tre bande a due colonne da circa 537 pixel: introduzione con testo a sinistra e spazio laterale a destra, primi tre servizi con spazio laterale a sinistra e testo a destra, ultimi tre servizi con testo a sinistra e spazio laterale a destra.

La larghezza del documento coincide con la viewport e non emerge overflow orizzontale.

## Mobile

Nella viewport 390 × 844 ogni pannello aperto ha mantenuto `aria-expanded="true"`, `hidden=false`, classe `open` e `position: static`. Tutti i pannelli sono compresi tra 29 e 361 pixel orizzontali, con `documentWidth=390` e `viewportWidth=390`.

| Accordion | Altezza dinamica pannello |
|---|---:|
| Ambassador olfattivo per brand | 931 px |
| Consulenza narrativa e direzione culturale | 785 px |
| Formazione olfattiva per team e reti vendita | 799 px |
| Eventi ed esperienze olfattive | 760 px |
| Contenuti editoriali e culturali | 746 px |
| Progetti speciali per hospitality, spa e luoghi culturali | 799 px |

La barra azioni fissa può sovrapporsi alla parte bassa della call to action quando questa viene allineata al bordo inferiore mediante uno scorrimento automatico standard. Con un normale scorrimento aggiuntivo di 75 pixel, la call to action del sesto pannello risulta interamente sopra la barra: `ctaBottom=781` e `barTop=792`. La call to action resta quindi raggiungibile e leggibile senza modifiche al codice.

La misura numerica della call to action riguarda il sesto pannello, scelto come caso più esteso nella seconda banda Servizi. Le call to action dei primi cinque pannelli usano la stessa classe e restano nel medesimo flusso verticale, tuttavia non sono state misurate singolarmente in questa verifica.

## Fuori scope

Il Task 9 non comprende la navigazione sequenziale con Tab su tutti e sei i comandi, test con screen reader, browser alternativi o breakpoint intermedi come 768 pixel. Le conclusioni del report sono limitate alla tastiera con Invio sul primo comando, alla viewport desktop verificata e alla viewport mobile 390 × 844.

## Conclusione

I sei accordion rispettano i contratti strutturali, accessibili nei termini verificati, interattivi e responsive. Nessun difetto è emerso dai test. Il Task 9 non richiede correzioni al codice e conserva invariati tutti i blocchi F del sito.

## Riferimenti

[1]: https://github.com/VDLgrg17/raffaella-pisani-sito/blob/master/index.html#L497-L690 "F6 — stile Servizi e accordion"
[2]: https://github.com/VDLgrg17/raffaella-pisani-sito/blob/master/index.html#L1057-L1113 "F10 e F10b — responsive e geometria laterale"
[3]: https://github.com/VDLgrg17/raffaella-pisani-sito/blob/master/index.html#L1742-L1991 "F15 — markup dei sei Servizi"
[4]: https://github.com/VDLgrg17/raffaella-pisani-sito/blob/master/index.html#L2411-L2436 "F24 — comportamento accordion"
