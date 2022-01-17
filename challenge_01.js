
/*********   CODE CHALLENGE 01 **********/
 
/*
Geben Sie über eine Prompt-Anforderung eine Zahl ein.
Geben Sie über eine Prompt-Anforderung eine zweite Zahl ein.
Berechnen Sie die Summe der beiden Zahlen.
Geben Sie die Summe der Zahlen in die Konsole aus:
"Die Summe der Zahlen ist: summe"
*/


// let ZahlOne = prompt("Bitte zahl eingeben");
 //let ZahlTwo = prompt("Bitte Zahl eingeben");
 //let summe = parseInt(ZahlOne) + parseInt(ZahlTwo);

 //console.log ("Ergebnis der Summe:" + summe);

 // Nachbesprechung

//Deklaration
//let ziffer1, ziffer2;
//let zahl1, zahl2;
//let summe;

// Eingabe Wertzuweisung :: Ziffern
//ziffer1 = prompt("zahl1:");
//ziffer2 = prompt("Zahl2:");
//console.log(typeof zahl1);
//console.log(typeof zahl2);

//Typkonvertierung / Ziffer --> Zahl (string--> number)
//zahl1 = parseInt(ziffer1);
//zahl2 = parseInt(ziffer2)
//console.log(typeof zahl1);
//console.log(typeof zahl2);


//Berechnung
//summe = zahl1 + zahl2;


//Ausgabe
//console.log("Die Summe ist:" + summe);


//Kompaktere Lösung

let zahl1, zahl2, summe;

zahl1 = parseInt(prompt("Zahl 1:"));
zahl2 = parseInt(prompt("Zahl 2:"));
summe = zahl1 + zahl2;
console.log("Die summer der zahlen ist:" + summe);

