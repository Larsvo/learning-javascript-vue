const pagespeedScore = 100;

if (pagespeedScore >= 50) {
    console.log("oranje pagespeed is ok");
} else if (pagespeedScore >= 90) {
    console.log("Groen pagespeed is good");
} else if (pagespeedScore === 100) {
    console.log("Groen pagespeed is perfect");
} else {
    console.log("pagespeed is not good");
}

const projectliveUrl = "https://www.viecuri.nl";
const projectTitle = "Viecuri";

if (projectliveUrl) {
    console.log(`Bekijk de website van ${projectTitle} live: ${projectliveUrl}`);
} else {
    console.log(`${projectTitle} staat helaas nog niet online`);
}
