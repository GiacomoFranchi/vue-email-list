# ESERCIZIO
## Descrizione:
Attraverso l'apposita API di Boolean
https://flynn.boolean.careers/exercises/api/random/mail
generare 10 indirizzi email e stamparli in pagina all'interno di una lista.
Bonus
Far comparire gli indirizzi email solamente quando sono stati tutti generati.

## Svolgimento:
**Raccolta dati**
Utilizzando Vue inserisco nel return di data le variabili:
    - randomMail a cui verrà assegnata la stringa contenente la mail generata dal server
    - username: a cui verrà assegnata la stringa contenente un nome generato dal server 
    - l'array mails: che conterrà le 10 mail

**Logica del Programma**
1. Utilizzando created() faccio una richiesta al server riferita all'indirizzo "https://flynn.boolean.careers/exercises/api/random/name"
richiedendo un nome randomico che inseriro in html in un h1 dichiarandolo come {{username}}
2. creo una funzione che si ripete utilizzando il ciclo for per 10 volte
cosi da genereare a ogni ciclo un indirizzo mail random che andrò a inserire nell'array di "mails"

**OUTPUT**
utilizzando v-for="(mail , index) in mails" all'interno di <ul> genero una lista di 10 <li> uno per ogni mail contenuta nell'array