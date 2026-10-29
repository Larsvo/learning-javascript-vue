const pagespeedScore = 100;

if (pagespeedScore >= 50) {
    console.log("oranje page speed is ok");
} else if (pagespeedScore >= 90) {
    console.log("Groen page speed is good");
} else if (pagespeedScore === 100) {
    console.log("Groen page speed is perfect");
} else {
    console.log("page speed is not good");
}

const projectliveUrl = "https://www.viecuri.nl";
const projectTitle = "Viecuri";

if (projectliveUrl) {
    console.log(`Bekijk de website van ${projectTitle} live: ${projectliveUrl}.`);
} else {
    console.log(`${projectTitle} staat helaas nog niet online.`);
}
