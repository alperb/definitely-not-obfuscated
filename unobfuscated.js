const alphabet = "abcdefghijklmnopqrstuvwxyz ";
const alphabetLength = alphabet.length;

function getGuessFromInput(){
    return document.getElementById("lecturer").value;
}

function toUpperLetter(l) {
    return l.toUpperCase();
}

function isGuessCorrect(guess) {
    const answer = "oNur VaRol";
    return guess == answer;
}

function validateGuess(){
    const FLAG = "SUCTF{3Very_LECtUrer_1s_th3_B3sT_L3ctUR3r}"
    const guess = getGuessFromInput();
    if (isGuessCorrect(guess)){
        alert("Correct! The flag is: " + FLAG);
    }
    else {
        alert("Incorrect!");
    }
}