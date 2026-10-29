const celsius = 36;
const fahrenheit = (celsius * 9/5) + 32;
const uitkomst = `want het is ${fahrenheit}°F en dat is ${celsius}°C`;

if (celsius <= 10) {
    console.log(`trek je jas aan ${uitkomst}`);
} else if (celsius > 10 && celsius < 20) {
    console.log(`trek je trui aan ${uitkomst}`);
} else {
    console.log(`pfff wat is het warm ${uitkomst}`);
}