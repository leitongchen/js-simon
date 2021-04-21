function randomNumGen(maxNum) {

    var randomNum = Math.ceil(Math.random() * maxNum); 

    return randomNum;
}

(function () {

    // FUNZIONE che crea numeri random e li pusha in un array 
    var fiveNumbers = []; 
 
    while (fiveNumbers.length < 5) {

        var randomNumber = randomNumGen(50);
        fiveNumbers.push(randomNumber); 
    }

    console.log(fiveNumbers);




    /* si esegue un alert che contiene 5 numeri da memorizzare
     */
    alert(fiveNumbers.join(", ") + " - Memorizza questi 5 numeri, quando sei pronto, premi OK.");

    /* quando utente clicca ok
        parte il setTimeout di 30 secondi 
     */





    /* Trascorsi 30 secondi compare prompt
        in cui l'utente reinserisce i 5 numeri random che ha visualizzato
    */
    // Inserisco prompt dentro un ciclo così compare finché l'utente non ha inserito 5 valori
    // I valori vengono pushati dentro un array userNumbers


    // FUNZIONE che verifica che i numeri inseriti dall'utente corrispondano a quelli del primo alert
    // i numeri corretti vengono inseriti in una nuova array correctNumbers




})();



