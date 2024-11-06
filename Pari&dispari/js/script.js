/**
 * Funzione per generare un numero random da 1 a 5
 * @returns {number}
 */
function generateRandomNumber() {
    return Math.floor(Math.random() * 5) + 1;
}

// Chiedo all'utente di scegliere "pari" o "dispari"
let userChoice = prompt("Scegli 'pari' o 'dispari':").toLowerCase();

// Chiedo all'utente di inserire un numero da 1 a 5
let userNumber = parseInt(prompt("Inserisci un numero da 1 a 5:"));

// Il computer genera un numero random da 1 a 5
let computerNumber = generateRandomNumber();

// Somma dei due numeri
let sum = userNumber + computerNumber;

// Determina se la somma è pari o dispari
let sumIsEven = sum % 2 === 0 ? "pari" : "dispari";

// Determina chi ha vinto
if (userChoice === sumIsEven) {
    alert("Hai vinto! La somma è " + sumIsEven + ".");
} else {
    alert("Hai perso. La somma è " + sumIsEven + ".");
}
