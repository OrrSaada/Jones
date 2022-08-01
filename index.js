
const puppeteer = require('puppeteer');
// importing the data from the info.js file
const INFO = require('./info');

async function run() {
    const browser = await puppeteer.launch({ headless: false });
    const page = await browser.newPage();
    // Assigning HTML selectors to variables
    const NAME_SELECTOR = '#name';
    const EMAIL_SELECTOR = '#email';
    const PHONE_SELECTOR = '#phone';
    const COMPANY_SELECTOR = '#company';
    const EMPLOYEES = '#employees'
    const BUTTON_SELECTOR = 'body > div > div.row > div.large-5.medium-5.columns > div > form > p:nth-child(8) > button';


    await page.goto('http://contractorsinsurancereview.com/ExampleForm/');
    // Filling each field with the data i want
    await page.click(NAME_SELECTOR);
    await page.keyboard.type(INFO.Name)

    await page.click(EMAIL_SELECTOR);
    await page.keyboard.type(INFO.Email)

    await page.click(PHONE_SELECTOR);
    await page.keyboard.type(INFO.Phone)

    await page.click(COMPANY_SELECTOR);
    await page.keyboard.type(INFO.Company)

    await page.select(EMPLOYEES, '51-500');

    await page.screenshot({ path: 'screenshots/screenshot.png' });

    await page.click(BUTTON_SELECTOR);

    console.log('Signed up successfully')

    // uncomment the line below to close the browser window when completed
    // browser.close();
}

run();
