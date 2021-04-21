function randomNumGen(maxNum) {

    var randomNum = Math.ceil(Math.random() * maxNum);

    return randomNum;
}

// funzione che verifica che il numero inserito non sia già presente 
function checkForDouble(numbersArray, numToCheck) {

    var findIndex = numbersArray.indexOf(numToCheck);

    if (findIndex > -1) {
        return findIndex;
    }
    return -1;
}

// FUNZIONE che verifica che i numeri inseriti dall'utente corrispondano a quelli del primo alert
// i numeri corretti vengono inseriti in una nuova array correctNumbers

function checkTheNumber(numbersArray, numToCheck) {

    var findTheNumber = numbersArray.includes(numToCheck);

    if (!findTheNumber) {
        return false;
    }
    return true; 
}

function inputIsValid(input){
    if (isNaN(input) || input < 1 || input > 100) {
        return false;
    }
    return true;
}


(function () {

    // FUNZIONE che crea numeri random e li pusha in un array 
    var fiveNumbers = [];
    var userNumbers = [];
    var guessedNumbers = [];


    while (fiveNumbers.length < 5) {

        var randomNumber = randomNumGen(100);
        if (checkForDouble(fiveNumbers, randomNumber) === -1) {

            fiveNumbers.push(randomNumber);
        }
    } 

    /* si esegue un alert che contiene 5 numeri da memorizzare
     */
    alert(fiveNumbers.join(", ") + " - Memorizza questi numeri, quando sei prontə premi OK.");

    /* quando utente clicca ok
        parte il setTimeout di 30 secondi 
    */

    /* Trascorsi 30 secondi compare prompt
    in cui l'utente reinserisce i 5 numeri random che ha visualizzato
    */
    setTimeout(numbersMemory, 30000);

    function numbersMemory() {

        // Inserisco prompt dentro un ciclo così compare finché l'utente non ha inserito 5 valori
        // I valori vengono pushati dentro un array userNumbers

        while (userNumbers.length < 5) {

            var userInput = parseInt(prompt("Ora reinserisci i 5 numeri che hai memorizzato. Ne hai inseriti " + userNumbers.length))

            if (!inputIsValid(userInput)) {
                alert("Non hai inserito un valore valido. Puoi inserire solo numeri a partire da 1 a 100.")
            
            } else if (checkForDouble(userNumbers, userInput) === -1) {
                
                userNumbers.push(userInput);
                
                // FUNZIONE che verifica che i numeri inseriti dall'utente corrispondano a quelli del primo alert
                    // i numeri corretti vengono inseriti in una nuova array guessedNumbers
                if (checkTheNumber(fiveNumbers, userInput)) {
                    guessedNumbers.push(userInput); 
                }

            } else {
                alert("Hai già inserito questo numero.")
            }
        }
        console.log("Questi erano i numeri che dovevi memorizzare " + fiveNumbers.join(" - "));
        console.log(fiveNumbers)
        console.log("Il gioco è finito. Questi sono i numeri che hai inserito " + userNumbers.join(" - ") + ".");
        console.log("Questi sono i numeri corretti che hai inserito " + guessedNumbers.join(" - ") + ". Ne hai indovinati " + guessedNumbers.length + ".");
    }


    







})();



