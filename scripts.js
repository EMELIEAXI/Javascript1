// För G

// Skapa en webbsida som använder ett javascript - kalla den för scripts.js
// I scripts.js ska du skapa
// en funktion som heter getName() och den ska fråga användaren om vad den heter (prompt) och sedan returnera namnet i STORA BOKSTÄVER
// skriv kod som anropar funktionen och sen säger (alert) tex "Hej STEFAN visste du att ditt namn har 6 bokstäver"


//funktion för att hämta namnet och konvertera till stora bokstäver:
function getName(){
    let Name = prompt("Vad heter du?").toUpperCase();
    return Name;
}

//funktion för att räkna antalet bokstäver:
function raknabokstaver(Name){
    return Name.length;
}

//lagra resultatet i variabler:
let fornamn = getName();
let antalbokstavar = raknabokstaver(fornamn)

//Skriv ut:
alert("Hej "+ fornamn + " ! Visste du att du har " + antalbokstavar + " st bokstäver i ditt namn?");

//Prutt och bajs bara för att testa 