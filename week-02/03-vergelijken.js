
const viewportWidth = 1023;

// Net als @media (min-width: 768px) and (max-width: 1023px)
const isMobile = viewportWidth < 768;
const isTablet = viewportWidth >= 768 && viewportWidth < 1024;
const isDesktop = viewportWidth >= 1024;

console.log(`mobile: ${isMobile}, tablet: ${isTablet}, desktop: ${isDesktop}`);



console.log(!isMobile);          // true
// PageSpeed-check. Neem je pageSpeed-score van 99.
// Maak een boolean die true is bij 90 of hoger (groen in Lighthouse)
// en een die alleen true is bij precies 100. Log ze allebei met een korte zin.

const pagespeedScore = 100;

const isGoodPagespeed = pagespeedScore >= 90;
const isBadPagespeed = !isGoodPagespeed;
const isPerfectPagespeed = pagespeedScore === 100;

console.log(`pagespeed is good: ${isGoodPagespeed}, pagespeed is bad: ${isBadPagespeed}, pagespeed is perfect: ${isPerfectPagespeed}`);

console.log(5 == "5");
console.log(5 === "5");
console.log("10" < "9");
console.log(0.1 + 0.2 === 0.3);
console.log(NaN === NaN);
console.log("zebra" < "aap");