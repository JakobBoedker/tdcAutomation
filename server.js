const puppeteer = require('puppeteer');
const express = require('express');
const app = express();


port = 3000
const password = 'mitpassword'
const user = 'mymail@mail.com'


function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

//function that opens TDC selvbetjening and login
async function openTDC() {

    try{
        const browser = await puppeteer.launch(
            {headless: false},
            {args: ['--incognito']}
        );
        const page = await browser.newPage();
        await page.goto('https://selvbetjening.tdc.dk/');
        await page.waitForSelector('#username');
        await page.type('#username', user);
        await page.type('#password', password);
        //await page.waitForSelector('#ink');
        await sleep(5000);
        await page.click('#declineButton');
        await page.click('#post-button');
        const ink = await page.evaluate(() => {
            return document.querySelector('#ink').innerText;
        });
        console.log(ink);
        await browser.close();
    } catch (error) {
        console.log(error)

    }}

async function oprettelse(nummer, mail, navn) {
    return 'test'
}
async function opsigelse(nummer, mail, navn) {
    return 'test'
}

async function nummerflytning(nummer, mail, navn) {
    return 'test'
}

//get request that opens TDC selvbetjening and login
app.get('/tdc-login', async (req, res) => {
  try {
        openTDC();
        res.send('TDC opened');
    } catch (error) {
        console.log(error);
        res.send('Something went wrong');
    }
});

app.get('/tdc-oprettelse', async (req, res) => {
    try{
        console.log('test')
        res.send('test worked')
    } catch (error) {
        console.log(error)
    }
})

app.get('/tdc-opsigelse', async (req, res) => {
    try{
        console.log('test')
        res.send('test worked')
    } catch (error) {
        console.log(error)
    }
})

app.get('/tdc-nummerflytning', async (req, res) => {
    try{
        console.log('test')
        res.send('test worked')
    } catch (error) {
        console.log(error)
    }
})


//listen on port 3000
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})