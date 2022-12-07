const puppeteer = require('puppeteer');
const url = "https://auth.ticketmaster.com/as/authorization.oauth2?client_id=8bf7204a7e97.web.ticketmaster.us&response_type=code&scope=openid%20profile%20phone%20email%20tm&redirect_uri=https://identity.ticketmaster.com/exchange&visualPresets=tm&lang=en-us&placementId=discovery&hideLeftPanel=false&integratorId=prd1224.ccpDiscovery&intSiteToken=tm-us&deviceId=KlsOaugR1jE4ODU0NjY4MzQ1NjgyZNZwFcL9cw";
const username = "email";
const pw = "pw";

async function run() {
    const browser = await puppeteer.launch({headless: false});
    const page = await browser.newPage();
    await page.goto(url);
    await page.type('#email[objectobject]__input', username);
    await page.type('#password[objectobject]__input', pw);
    await page.click('#sign-in');
    await page.waitForNavigation();

}

run();