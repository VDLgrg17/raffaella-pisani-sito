# Sito Raffaella Pisani — documento di continuità

**Data di riferimento:** 3 settembre 2026.

Questo documento registra lo stato del sito di Raffaella Pisani, definisce le attività ancora aperte e stabilisce la sequenza di lavoro da rispettare nelle sessioni successive. Nessuna modifica al codice può partire senza la dichiarazione preventiva dei blocchi coinvolti, delle righe, delle dipendenze e della superficie di impatto.

## Repository e pubblicazione

Il repository di riferimento è `VDLgrg17/raffaella-pisani-sito` sul branch `master`. Il sito è pubblicato provvisoriamente su `https://raffaella-pisani-sito.netlify.app`. Il dominio `sensidistrati.it` sarà collegato a Netlify in un intervento separato, soltanto dopo la conferma di attivazione e la verifica della zona DNS.

## Stato consolidato

Il sito è una pagina statica con CSS e JavaScript inline organizzati in Blocchi F. La navigazione mobile usa un menu hamburger con rispetto della safe area iOS. Nella hero mobile il pannello verde con il nome è visualizzato prima della fotografia. La barra PWA mostra su mobile Condividi, Refresh ed Esci, mentre su desktop aggiunge Installa app. La voce Community è presente sia nel menu desktop sia nel menu mobile e collega la relativa sezione. I pulsanti dei servizi mantengono lo stile originale e aprono una descrizione sintetica al clic.

Sono state inoltre corrette le criticità di leggibilità segnalate nelle sezioni Contatti e Collaborazioni. I testi digitati nel form usano il bianco pieno, le etichette delle collaborazioni sono nere e la sezione Community possiede un contenitore con margini corretti. Le correzioni grammaticali già approvate includono la rimozione della virgola prima di “e”, la sostituzione delle forme parlate individuate e l’uso della minuscola dopo i due punti nelle etichette “intervento:” e “risultato:”.

Il controllo integrale del 2 settembre 2026 ha verificato il sito a 1280 × 800, 768 × 1024 e 390 × 844 pixel. Navigazione, ancore, accordion, Community, immagini, barra PWA e responsive risultano conformi. Il controllo ha escluso il presunto difetto dell’offset mobile e ha individuato due problemi reali: il blocco F17 era soltanto visuale e il blocco F30 non dichiarava alcuna icona.

Il modulo Contatti è ora un modulo HTML statico rilevabile da Netlify. I campi possiedono nomi, obbligatorietà, associazioni accessibili e validazione nativa, mentre stile e testo visibile restano invariati. La pagina Archivio riusa manifest e icone già disponibili nel progetto, eliminando la richiesta implicita della favicon mancante.

## Regola fotografica vincolante

Ogni futura fotografia deve essere collocata a sinistra, con i contenuti testuali a destra. Nessuna fotografia può essere collocata al centro della pagina come elemento autonomo. Nelle impaginazioni a colonna singola per smartphone resta valido l’ordine responsivo già approvato, senza trasformare la fotografia in una cartolina centrale.

Le fotografie a cartolina con fiori, profumi, resine ed essenze non devono comparire nelle pagine pubbliche. I nove spazi originari restano vuoti, con dimensioni e posizioni preservate, in attesa delle immagini sostitutive. Gli otto file sorgenti restano disponibili nel repository e non sono richiamati dal markup.

Il checkpoint GitHub precedente al task Referenze è `9bc67f2`; gli stati successivi sono tracciati nella cronologia del branch `master`.

## Attività da svolgere in sequenza

| Ordine | Intervento previsto |
|---|---|
| 1 | **Completato il 2 settembre 2026.** Menu desktop, mobile e Archivio allineati alla voce Referenze e alla sezione professionale `#credibilita`. |
| 2 | **Completato il 2 settembre 2026.** Sezione Chi sono integrata con il nuovo posizionamento strategico B2B del documento guida. |
| 3 | **Completato il 2 settembre 2026.** La sezione Visione risultava già integralmente allineata ai tre pilastri Accoglienza, Cultura e Ascolto; nessuna modifica al sito è stata necessaria. |
| 4 | **Completato il 2 settembre 2026.** Sezione Servizi riorganizzata nelle sei aree ufficiali; stile e comportamento degli accordion preservati. |
| 5 | **Completato il 2 settembre 2026.** Sezione Modalità di collaborazione inserita con otto forme di ingaggio e call to action verso Contatti. |
| 6 | **Completato il 2 settembre 2026.** Sezione Referenze predisposta con introduzione professionale e punto riservato alle future testimonianze autorizzate; rimosse le tre card aziendali provvisorie. |
| 7 | **Completato il 2 settembre 2026.** Community olfattiva allineata al documento guida; dodici testimonianze, pulsante e call to action preservati. |
| 8 | **Completato il 2 settembre 2026.** Il controllo integrale desktop e mobile ha confermato struttura, navigazione, immagini, PWA, accordion, ancore e responsive. I due difetti reali emersi sono stati corretti nei blocchi F17 e F30 senza variazioni al design approvato. |
| 9 | Collegare il dominio `sensidistrati.it` a Netlify soltanto dopo la disponibilità del nome di dominio attivo, degli screenshot della zona DNS, dei record esistenti e della verifica di eventuali caselle email. |

## Dipendenze aperte

Le referenze professionali devono essere fornite dal committente prima della loro pubblicazione. Il funzionamento del modulo Contatti è affidato al deploy automatico Netlify derivato dal branch `master`, senza accessi manuali al pannello. Il collegamento del dominio richiede l’accesso al pannello Register.it da parte della titolare e la verifica preventiva dei record DNS, con particolare attenzione ai record MX legati alla posta.

## Protocollo obbligatorio per ogni attività futura

Prima di una modifica occorre verificare il repository GitHub reale e rileggere il blocco F interessato. La procedura Vedetta deve ricostruire dipendenze dirette, indirette, inverse, trasversali, nascoste e dinamiche, quindi dichiarare il gate di apertura. Dopo la conferma di Giorgio può essere modificato soltanto il blocco autorizzato, aggiornando lo stato WIP e la mappa dei blocchi. La consegna richiede verifica post-modifica, validazione GV per ogni testo italiano, certificazione Claude per l’artefatto modificato e push GitHub conclusivo.

Se `mappa_blocchi.md` non è presente oppure non coincide con il codice reale, dovrà essere creata o aggiornata prima di qualunque intervento tecnico. Il repository RLM è esclusivamente una fonte di protocolli e non può contenere file del progetto.

## Stato operativo

La geometria laterale è predisposta nelle sezioni Chi sono, Visione, Servizi, Referenze e Contatti. I nove contenitori restano vuoti in attesa delle fotografie e occupano il lato opposto ai contenuti. Modalità di collaborazione e Community restano sezioni testuali, mentre la hero conserva la propria composizione già approvata.

I sei accordion possiedono comandi accessibili, pannelli univoci, stato iniziale chiuso e contenuti inseriti nel flusso della pagina. I sei accordion riportano ora contenuti completi derivati dal documento sorgente.

Il primo accordion Ambassador contiene destinatari, problema, rischio, intervento, cinque attività, valore e call to action derivati dal documento sorgente. La sola correzione editoriale applicata corrisponde alla minuscola dopo i due punti richiesta dal validatore GV.

Il controllo deterministico ha superato sedici criteri. Gli altri cinque accordion, le immagini, i collegamenti, la geometria laterale e le superfici esterne al blocco F15 restano invariati.

Il secondo accordion Consulenza narrativa e direzione culturale contiene destinatari, problema, rischio, intervento, sei attività, valore e call to action derivati dal documento sorgente. La struttura, l’accessibilità, la geometria e gli altri cinque servizi restano invariati.

Il terzo accordion Formazione olfattiva per team e reti vendita contiene destinatari, problema, risultato, intervento, sei attività, valore e call to action derivati dal documento sorgente. La struttura, l’accessibilità, la geometria e gli altri cinque servizi restano invariati.

Il quarto accordion Eventi ed esperienze olfattive contiene destinatari, problema, funzione dell’olfatto, intervento, sei attività, valore e call to action derivati dal documento sorgente. La struttura, l’accessibilità, la geometria e gli altri cinque servizi restano invariati.

Il quinto accordion Contenuti editoriali e culturali contiene destinatari, problema, intervento, sei attività, valore e call to action derivati dal documento sorgente. La struttura, l’accessibilità, la geometria e gli altri cinque servizi restano invariati.

Il sesto accordion Progetti speciali per hospitality, spa e luoghi culturali contiene destinatari, problema, funzione dell’olfatto, intervento, sei attività, valore e call to action derivati dal documento sorgente. La struttura, l’accessibilità, la geometria e gli altri cinque servizi restano invariati.

La matrice di corrispondenza tra documento sorgente, markup F15 e sito pubblico è registrata in `matrice_servizi.md`. Il controllo conferma sei servizi completi, trentacinque attività presenti e tre variazioni editoriali dichiarate senza omissioni concettuali. La verifica pubblica della matrice riguarda la presenza testuale dei titoli e delle call to action, mentre la verifica strutturale e visiva resta nel task successivo.

La verifica strutturale, interattiva e responsive dei sei accordion è registrata in `verifica_accordion_task9.md`. Il report documenta sessantanove controlli statici, quindici controlli desktop, l’attivazione con Invio e la verifica mobile a 390 × 844. Non sono emersi difetti nei test eseguiti e non è stato modificato alcun file di codice.
