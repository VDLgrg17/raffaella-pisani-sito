# Audit integrale — documento iniziale, task svolti e sito reale

**Documento confrontato:** `Testisitofinali2sett(1).docx`  
**Data del controllo:** 4 settembre 2026  
**Repository e branch:** `VDLgrg17/raffaella-pisani-sito`, `master`  
**Sito pubblico controllato:** https://raffaella-pisani-sito.netlify.app/

> **Verdetto sintetico:** non posso dichiarare una coincidenza letterale del 100%. Posso dichiarare che tutti i contenuti testuali verificabili del documento risultano presenti o semanticamente conservati nel sito, con variazioni tracciate. La condizione relativa alle referenze professionali corrette non è certificabile perché il documento non fornisce i dati da verificare.

## Metodo di confronto

L’audit applica un confronto su tre livelli: documento Word → markup locale → sito pubblico. Ogni controllo richiede la presenza sia nel repository sia nella pagina Netlify, dopo la normalizzazione delle sole differenze tipografiche come apostrofi e spazi introdotti dalle strutture XML del DOCX.

La verifica distingue tre esiti. **Letterale** indica identità del testo. **Semanticamente conservato** indica contenuto invariato con riorganizzazione in etichetta e valore. **Non certificabile** indica una richiesta del documento priva dei dati necessari al confronto.

## Evidenze deterministiche

| Controllo | Esito |
|---|---:|
| Ancoraggi verificabili di menu, Chi sono, Visione, Servizi, Modalità, Referenze e Community | 52 su 52 PASS |
| Controlli dettagliati dei sei servizi | 76 su 76 PASS |
| Servizi completi | 6 su 6 |
| Attività dei servizi | 35 su 35 |
| Blocchi semantici Servizi | 41 su 41 |
| Titoli e call to action pubblici Servizi | 12 su 12 |
| Testimonianze Community esistenti | 12 card presenti |
| Disponibilità pubblica Netlify | HTTP 200 |
| Commit testuali principali presenti nella cronologia | 17 su 17 |

## Matrice documento → sito

| Area del documento | Riscontro nel sito | Stato |
|---|---|---|
| Menu in testa con Chi sono, Visione, Servizi, Referenze, Community, Contatti | sei voci presenti sia nel menu desktop sia nel menu mobile | letterale |
| Chi sono | titolo e cinque paragrafi presenti con il posizionamento B2B, il metodo e lo sguardo interdisciplinare | letterale |
| Visione | titolo, Accoglienza, Cultura e Ascolto con i relativi testi presenti | letterale |
| Introduzione Servizi | titolo e tre paragrafi introduttivi presenti | letterale con differenza tipografica del titolo nel DOCX |
| Sei servizi | destinatari, problema o rischio, intervento, attività, valore e call to action presenti | semanticamente conservato |
| Modalità di collaborazione | introduzione, otto modalità, chiusura e call to action presenti | letterale, con due punti nel documento e punto nel sito |
| Referenze, testo introduttivo | titolo e tre paragrafi presenti | letterale |
| Referenze, box con referenze corrette | il sito presenta loghi, collaborazioni e case history, tuttavia il documento non fornisce le referenze corrette da confrontare | non certificabile |
| Community olfattiva | titolo e quattro paragrafi presenti | letterale |
| Community, box con referenze esistenti | dodici testimonianze personali sono presenti nel box apribile | verificato |

## Variazioni che impediscono il 100% letterale

Le variazioni seguenti non hanno prodotto omissioni concettuali, tuttavia impediscono di dichiarare identità parola per parola.

| Categoria | Documento | Sito | Valutazione |
|---|---|---|---|
| Attività Ambassador | `presentazioni olfattive guidate;` | `presentazioni olfattive guidate per pubblici selezionati.` | ampliamento editoriale |
| Call to action Ambassador | `Parliamone.` | `Parliamone e costruiamo insieme il progetto.` | ampliamento editoriale |
| Call to action Consulenza | `Possiamo lavorarci insieme.` | `Possiamo lavorare insieme sul tuo racconto di brand.` | riformulazione editoriale |
| Call to action Eventi | domanda e risposta separate da punto | domanda e risposta separate da virgola | variazione di punteggiatura |
| Call to action Editoriale | domanda e risposta separate da punto | domanda e risposta separate da virgola | variazione di punteggiatura |
| Call to action Progetti speciali | domanda e risposta separate da punto | domanda e risposta separate da virgola | variazione di punteggiatura |
| Modalità di collaborazione | frase conclusa da due punti | frase conclusa da punto | variazione di punteggiatura |

Il markup utilizza inoltre etichette come `Destinatari`, `Problema`, `Rischio`, `Intervento` e `Valore per il brand` per strutturare i periodi del documento. Quattordici trasformazioni di questo tipo sono state rilevate e conservano il testo sostanziale dopo l’etichetta.

## Tracciabilità dei task pubblicati

| Ambito | Evidenza GitHub |
|---|---|
| Posizionamento B2B in Chi sono | `e74d5e3` |
| Conformità della Visione | `1b3f782` |
| Allineamento iniziale Servizi | `c683714` |
| Modalità di collaborazione | `9bc67f2` |
| Referenze verificate | `3786fde` |
| Community olfattiva | `6852b6d` |
| Sei contenuti completi degli accordion | `5843c5e`, `84b4926`, `b3e8116`, `126216f`, `f58c83a`, `93bfd88` |
| Matrice, verifica e certificazione finale Servizi | `72b2782`, `b368b81`, `51c1b4d`, `e22f897` |

## Setaccio critico della tesi «coincide al 100%»

### Osservazione

La tesi richiede che ogni testo e ogni istruzione del documento iniziale coincida integralmente con il sito e con i task pubblicati.

### Predizione verificabile

Se la tesi fosse vera in senso letterale, non dovrebbero esistere variazioni di testo, trasformazioni di etichetta o richieste prive dei dati necessari alla verifica.

### Prove

I controlli deterministici confermano 52 ancoraggi generali e 76 controlli dettagliati Servizi. Il confronto rileva però sette variazioni letterali e una richiesta non verificabile sulle referenze professionali corrette.

### Classificazione finale

**Parzialmente fondato:** la corrispondenza contenutistica verificabile è completa, mentre la coincidenza letterale assoluta non è dimostrabile.

## Verdetto operativo

Il sito coincide con il documento per tutti i contenuti testuali verificabili e per tutti i sei servizi nel loro significato, nelle attività e nelle call to action controllate. Non coincide letteralmente al 100%, perché sono presenti sette variazioni editoriali o tipografiche dichiarate. Non posso certificare la direttiva sulle referenze professionali corrette finché non vengono forniti i contenuti che devono sostituire o confermare quelli presenti.

Per trasformare il verdetto in un 100% letterale e operativo restano due sole decisioni del committente: confermare o ripristinare le sette formulazioni del documento e fornire o approvare le referenze professionali corrette. Nessuna di queste decisioni può essere sostituita da un’interpretazione tecnica autonoma.

## Riferimenti

[1]: file:///home/ubuntu/upload/Testisitofinali2sett(1).docx "Documento iniziale dei testi finali"
[2]: https://github.com/VDLgrg17/raffaella-pisani-sito/blob/master/index.html "Markup reale del sito"
[3]: https://github.com/VDLgrg17/raffaella-pisani-sito/blob/master/matrice_servizi.md "Matrice Servizi"
[4]: https://github.com/VDLgrg17/raffaella-pisani-sito/blob/master/certificazione_finale_servizi.md "Certificazione finale Servizi"
[5]: https://raffaella-pisani-sito.netlify.app/ "Sito pubblico"
