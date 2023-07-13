"use strict";

/***** Variablen 01 *******/

/** 
 * 
 *  Block-Kommentar
 * 
*/

// Konsolen-Ausgaben
// console.log("Hi");
// console.log(firstName);


/***** 02 Deklaration + Wertzuweisung I *******/

// let firstName;  // Deklaration (Definition)
// firstName = "Max";  // Werzuweisung
// console.log(firstName)  // Ausgabe

// let familyName;
// familyName = "Mütze";
// console.log(familyName);

/***** 02 Deklaration + Wertzuweisung II *******/

// let firstName, familyName;

// firstName = prompt("Bitte Vornamen eingeben: ");
// familyName = prompt("Bitte Nachnamen eingeben: ");

// console.log(firstName + " " + familyName);

//JS ist eine untypisierte Sprache!
// let test;
// test = "Maxine";
// test = 2;
// test = false;

// console.log("Datentyp: " + typeof test);
// console.log("Inhalt: " + test);

/****** 03a Variablen vs. Konstanten *******/

// let firstName = "Max";  // Deklaration (Definition)
// firstName = "Maxine";
// console.log(firstName)  // Ausgabe

// const firstName = "Max";  // Variable mit KONSTANTEM Inhalt
// firstName = "Maxine";   // KEINE neue Zuweisung zur LZ mögloch! --->Fehler
// console.log(firstName)  // Ausgabe

/***** 04 Beispiel - Berechnung ******/

// // Deklaration
// let ageJohn, ageMark;
// const birthYearJohn = 2000;
// const birthYearMark = 1990;

// // Berechnung
// let date = new Date();  // Systemfunktion Datum
// let year = date.getFullYear(); // spezifische Daten liefern lassen aus Variable -date-
// ageJohn = year - birthYearJohn;
// ageMark = year - birthYearMark;

// // Ausgabe
// console.log("ageJohn; " + ageJohn)
// console.log("ageMark: " + ageMark)

