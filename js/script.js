 
/**
 * Funzione per verificare se una parola è palindroma
 * @param {any} word
 * @returns {any}
 */
function isPalindrome(word) {
    // Inverte la parola e confronta con l'originale
    let reversedWord = word.split('').reverse().join('');
    
    return word.toLowerCase() === reversedWord.toLowerCase();
}

// Chiedi all'utente di inserire una parola
let userword = prompt("Inserisci una parola per verificare se è palindroma:");

if (userword) {
    // Verifica se la parola è palindroma
    if (isPalindrome(userword)) {
        alert("La parola è palindroma.");
    } else {
        alert("La parola non è palindroma.");
    }
} 
