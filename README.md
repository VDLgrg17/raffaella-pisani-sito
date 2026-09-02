# Sito Raffaella Pisani — documento di continuità

**Data di riferimento:** 2 settembre 2026.

Questo documento registra lo stato del sito di Raffaella Pisani, definisce le attività ancora aperte e stabilisce la sequenza di lavoro da rispettare nelle sessioni successive. Nessuna modifica al codice può partire senza la dichiarazione preventiva dei blocchi coinvolti, delle righe, delle dipendenze e della superficie di impatto.

## Repository e pubblicazione

Il repository di riferimento è `VDLgrg17/raffaella-pisani-sito` sul branch `master`. Il sito è pubblicato provvisoriamente su `https://raffaella-pisani-sito.netlify.app`. Il dominio `sensidistrati.it` sarà collegato a Netlify in un intervento separato, soltanto dopo la conferma di attivazione e la verifica della zona DNS.

## Stato consolidato

Il sito è una pagina statica con CSS e JavaScript inline organizzati in Blocchi F. La navigazione mobile usa un menu hamburger con rispetto della safe area iOS. Nella hero mobile il pannello verde con il nome è visualizzato prima della fotografia. La barra PWA mostra su mobile Condividi, Refresh ed Esci, mentre su desktop aggiunge Installa app. La voce Community è presente sia nel menu desktop sia nel menu mobile e collega la relativa sezione. I pulsanti dei servizi mantengono lo stile originale e aprono una descrizione sintetica al clic.

Sono state inoltre corrette le criticità di leggibilità segnalate nelle sezioni Contatti e Collaborazioni. I testi digitati nel form usano il bianco pieno, le etichette delle collaborazioni sono nere e la sezione Community possiede un contenitore con margini corretti. Le correzioni grammaticali già approvate includono la rimozione della virgola prima di “e”, la sostituzione delle forme parlate individuate e l’uso della minuscola dopo i due punti nelle etichette “intervento:” e “risultato:”.

Il commit GitHub di riferimento al momento della stesura è `7be4093`.

## Attività da svolgere in sequenza

| Ordine | Intervento previsto |
|---|---|
| 1 | **Completato il 2 settembre 2026.** Menu desktop, mobile e Archivio allineati alla voce Referenze e alla sezione professionale `#credibilita`. |
| 2 | **Completato il 2 settembre 2026.** Sezione Chi sono integrata con il nuovo posizionamento strategico B2B del documento guida. |
| 3 | **Completato il 2 settembre 2026.** La sezione Visione risultava già integralmente allineata ai tre pilastri Accoglienza, Cultura e Ascolto; nessuna modifica al sito è stata necessaria. |
| 4 | **Completato il 2 settembre 2026.** Sezione Servizi riorganizzata nelle sei aree ufficiali; stile e comportamento degli accordion preservati. |
| 5 | Inserire la sezione Modalità di collaborazione con le forme di ingaggio e la relativa call to action finale. |
| 6 | Creare la sezione Referenze professionali dopo il ricevimento di testimonianze autorizzate e verificabili; nessuna referenza può essere inventata. |
| 7 | Aggiornare la sezione Community olfattiva, preservando i box esistenti e riscrivendo la presentazione della community. |
| 8 | Collegare il dominio `sensidistrati.it` a Netlify soltanto dopo la disponibilità del nome di dominio attivo, degli screenshot della zona DNS, dei record esistenti e della verifica di eventuali caselle email. |

## Dipendenze aperte

Le referenze professionali devono essere fornite dal committente prima della loro pubblicazione. Il collegamento del dominio richiede l’accesso al pannello Register.it da parte della titolare e la verifica preventiva dei record DNS, con particolare attenzione ai record MX legati alla posta.

## Protocollo obbligatorio per ogni attività futura

Prima di una modifica occorre verificare il repository GitHub reale e rileggere il blocco F interessato. La procedura Vedetta deve ricostruire dipendenze dirette, indirette, inverse, trasversali, nascoste e dinamiche, quindi dichiarare il gate di apertura. Dopo la conferma di Giorgio può essere modificato soltanto il blocco autorizzato, aggiornando lo stato WIP e la mappa dei blocchi. La consegna richiede verifica post-modifica, validazione GV per ogni testo italiano, certificazione Claude per l’artefatto modificato e push GitHub conclusivo.

Se `mappa_blocchi.md` non è presente oppure non coincide con il codice reale, dovrà essere creata o aggiornata prima di qualunque intervento tecnico. Il repository RLM è esclusivamente una fonte di protocolli e non può contenere file del progetto.

## Stato operativo

I primi quattro interventi sono completati. Il prossimo task riguarda la sezione Modalità di collaborazione; il codice resta congelato fino all’apertura del relativo gate Vedetta. Questo documento deve essere aggiornato dopo ogni attività completata, ogni nuova dipendenza emersa o ogni variazione della sequenza stabilita.
