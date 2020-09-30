// server.js
// where your node app starts

// we've started you off with Express (https://expressjs.com/)
// but feel free to use whatever libraries or frameworks you'd like through `package.json`.
const express = require("express");
const app = express();
const puppeteer = require('puppeteer');

// our default array of dreams
const dreams = [
    "Find and count some sheep",
    "Climb a really tall mountain",
    "Wash the dishes"
];

// make all the files in 'public' available
// https://expressjs.com/en/starter/static-files.html
app.use(express.static("public"));

// https://expressjs.com/en/starter/basic-routing.html
app.get("/", (request, response) => {
    response.sendFile(__dirname + "/views/index.html");
});

router.get('/screenshot/image', async(req, res, next) => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto(`https://wigar.glitch.me/`);
    const screenshot = await page.screenshot({
        type: 'png',
        encoding: 'binary'
    });
    await browser.close();
    res.send(screenshot);
});
// listen for requests :)
const listener = app.listen(process.env.PORT, () => {
    console.log("Your app is listening on port " + listener.address().port);
});