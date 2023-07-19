## Descrizione

Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.

Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:

1. il prezzo del biglietto è definito in base ai km (0.21 € al km)
2. va applicato uno sconto del 20% per i minorenni
3. va applicato uno sconto del 40% per gli over 65.

L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo). Questo richiederà un minimo di ricerca.

## Svolgimento

- Chiedere all'utente il numero di chilometri che vuole percorrere.
- Chiedere all'utente l'età del passeggero.
- Moltiplicare ( numero chilometri \* 0.21€ )
- Applicare sconto del 20 % **SE** passeggero minorenne
- Applicare sconto del 40 % **SE** passeggero over 65
- Prezzo finale con .toFixed(2) (due numeri dopo la virgola)
