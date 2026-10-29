const cijfer = 10;

const isOnvoldoende = cijfer >= 1 && cijfer < 5.5;
const isVoldoende = cijfer >= 5.5 && cijfer < 7;
const isGoed = cijfer >= 7 && cijfer < 8.5;
const isUitstekend = cijfer >= 8.5 && cijfer <= 10;

if (isOnvoldoende) {
    console.log("try harder")
} else if (isVoldoende) {
    console.log("ok")
} else if (isGoed) {
    console.log("very well")
} else if (isUitstekend) {
    console.log("fantastisch!")
} else {
    console.log("error")
}

// const isMobile = viewportWidth < 768;
// const isTablet = viewportWidth >= 768 && viewportWidth < 1024;
// const isDesktop = viewportWidth >= 1024;

