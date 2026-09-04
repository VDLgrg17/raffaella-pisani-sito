# Certificazione finale — recupero completo sezione Servizi

**Data di chiusura:** 4 settembre 2026  
**Repository certificato:** `VDLgrg17/raffaella-pisani-sito`  
**Branch certificato:** `master`  
**Perimetro tecnico:** F3, F6, F7b, F10, F10b, F15, F19, F24 e F29, senza modifiche al codice nel Task 10. [1] [2] [3]

> La presente certificazione riunisce la matrice sorgente → sito del Task 8 e la verifica strutturale, interattiva e responsive del Task 9, aggiungendo un controllo finale integrato sulla fonte DOCX, sul markup locale, sulle evidenze e sul sito pubblico. [4] [5]

## Esito della certificazione

| Area certificata | Esito |
|---|---|
| Documento sorgente disponibile | PASS |
| Servizi sorgente rilevati | 6 su 6 |
| Servizi nel markup locale | 6 su 6 |
| Attività nel markup locale | 35 su 35 |
| Blocchi semantici sorgente già mappati | 41 su 41 |
| Titoli e call to action pubblici | 12 su 12 mediante presenza testuale |
| Controllo strutturale precedente | 69 su 69 PASS |
| Controllo interattivo desktop precedente | 15 su 15 PASS |
| Controllo finale integrato | 43 su 43 PASS |
| Disponibilità pubblica Netlify | HTTP 200 |
| Difetti dimostrati nella chiusura finale | nessuno |

## Stato dei sei servizi

| Servizio | Attività presenti | Stato contenuto |
|---|---:|---|
| Ambassador olfattivo per brand | 5 su 5 | completo con due variazioni editoriali dichiarate |
| Consulenza narrativa e direzione culturale | 6 su 6 | completo con una variazione editoriale dichiarata |
| Formazione olfattiva per team e reti vendita | 6 su 6 | completo e letterale |
| Eventi ed esperienze olfattive | 6 su 6 | completo e letterale |
| Contenuti editoriali e culturali | 6 su 6 | completo e letterale |
| Progetti speciali per hospitality, spa e luoghi culturali | 6 su 6 | completo e letterale |

Le tre variazioni editoriali sono già documentate nella matrice: ampliamento della prima attività Ambassador, ampliamento della relativa call to action e riformulazione della call to action Consulenza. Il controllo non rileva omissioni concettuali, sintesi o sostituzioni di significato. [4]

In particolare, l’attività `presentazioni olfattive guidate` è ampliata con `per pubblici selezionati`, la call to action Ambassador aggiunge `e costruiamo insieme il progetto` e la call to action Consulenza riformula `Possiamo lavorarci insieme` in `Possiamo lavorare insieme sul tuo racconto di brand`.

## Contratti tecnici confermati

Il markup contiene sei comandi e sei pannelli con identificatori univoci. Ogni pannello parte chiuso con `aria-expanded="false"` e attributo `hidden`. Il comportamento F24 mantiene un solo accordion aperto alla volta, richiude il pannello con il secondo clic e chiude tutti i pannelli mediante clic esterno. [3]

Nel test desktop non emerge overflow orizzontale, con `documentWidth=1265` e `viewportWidth=1265`. Nella viewport mobile 390 × 844 i sei pannelli restano nel flusso verticale, senza overflow orizzontale. La call to action del sesto pannello è raggiungibile sopra la barra fissa mediante normale scorrimento. [5]

Il controllo della console senza errori è stato eseguito su Chromium DevTools nell’origine locale isolata. La verifica pubblica di presenza testuale è stata eseguita sull’endpoint https://raffaella-pisani-sito.netlify.app/.

## Limiti dichiarati

La certificazione eredita i limiti espliciti del Task 9: non include la navigazione Tab sequenziale su tutti e sei i comandi, test con screen reader, browser alternativi o breakpoint intermedi. Le call to action dei primi cinque pannelli non sono state misurate singolarmente rispetto alla barra fissa. Questi limiti non alterano gli esiti certificati, poiché non sono inclusi nelle affermazioni di conformità sopra riportate. [5]

## Conclusione

Il recupero dei contenuti della sezione Servizi è completato e certificato entro il perimetro verificato. Tutti i sei accordion contengono il materiale sorgente previsto, le attività, le call to action e i contratti accessibili controllati. La pubblicazione pubblica è disponibile e il repository GitHub rimane la fonte di verità del lavoro concluso.

La chiusura parte dal commit GitHub `81736a6`, già allineato a `github/master` prima della certificazione finale.

## Riferimenti

[1]: https://github.com/VDLgrg17/raffaella-pisani-sito/blob/master/mappa_blocchi.md "Mappa Blocchi F"
[2]: https://github.com/VDLgrg17/raffaella-pisani-sito/blob/master/index.html#L1742-L1991 "F15 — markup della sezione Servizi"
[3]: https://github.com/VDLgrg17/raffaella-pisani-sito/blob/master/index.html#L2411-L2436 "F24 — comportamento degli accordion"
[4]: https://github.com/VDLgrg17/raffaella-pisani-sito/blob/master/matrice_servizi.md "Matrice documento sorgente → sito"
[5]: https://github.com/VDLgrg17/raffaella-pisani-sito/blob/master/verifica_accordion_task9.md "Verifica strutturale, interattiva e responsive"
[6]: https://raffaella-pisani-sito.netlify.app/ "Sito pubblico Raffaella Pisani"
