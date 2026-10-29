// Dan de laatste opdracht van week 2: de wachtwoordcheck in 07-wachtwoord.js.
//  Een wachtwoord is goed als het minstens 8 tekens heeft en niet gelijk is aan "wachtwoord".
//  Het aantal tekens vraag je op met .length: "hallo".length geeft 5.
// Bonus: laat zien wélke regel niet klopt, in plaats van alleen “afgekeurd”.
//
// Test met een wachtwoord dat te kort is, met "wachtwoord" zelf, met een goed wachtwoord en met precies 8 tekens.

const password = "abcdefgh";
const isPasswordTooShort = password.length < 8;
const isPasswordNamedPassword = password === "wachtwoord";
const isPasswordGood = !isPasswordTooShort && !isPasswordNamedPassword;

if (isPasswordGood) {
    console.log("Je wachtwoord is goed");
} else if (isPasswordNamedPassword) {
    console.log("Je wachtwoord mag niet de naam wachtwoord hebben");
} else if (isPasswordTooShort) {
    console.log("Je hebt niet genoeg tekens");
}

