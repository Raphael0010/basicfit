import {firefox} from "playwright";

const user = process.env.USER;
const pass = process.env.PASS;
let day = process.env.DAY;
const hour = process.env.HOUR;

if(!user || !pass || !day || !hour) {
    throw new Error(".env.local must be filled with your credentials");
}

if(day === "MORNING"){
    day = "#morningSlotsId"
}

if(day === "AFTERNOON"){
    day = "#afternoonSlotsId"
}

if(day === "EVENING"){
    day = "#eveningSlotsId"
}

(async () => {
    const browser = await firefox.launch(); 
    const page = await browser.newPage();
    await page.goto('https://my.basic-fit.com/gym-time-booking', {waitUntil:'load'});
    await page.waitForSelector('#contentSection')
    await page.click('input[name="email"]')
    await page.fill('input[name="email"]', user);
    await page.click('input[name="password"]')
    await page.fill('input[name="password"]', pass)
    await page.click('#loginBtn')
    await page.waitForSelector('#reserveBookingId')
    console.log("Connected to Basic Fit")
    await page.click('#reserveBookingId')
    // On attend que le bouton "Next" soit cliquable
    await page.waitForSelector('#nextBtnId')
    // On clique sur l'aprem midi
    await page.click(`${day}`,{delay:1000})
    // Sur l'heure
    await page.click(`text=${hour}`,{delay:1000})
    // On clique sur le bouton "Next"
    await page.click('#nextBtnId',{delay:1000})
    // On clique sur 90 minutes
    await page.click('text=90 minutes',{delay:1000})
    // on clique sur la checkbox sur le covid
    await page.click('div[class="bullet-point corona-term-checkbox"]',{delay:1000})
    // On clique sur le bouton "Next"
    await page.click('#nextBtnId',{delay:1000})
    console.log(`Reservation done for ${day} at ${hour}`)
    // other actions...
    await browser.close();
  })();