let puppeteer = require("puppeteer");

(async function () {

    // starts browser
    let browser = await puppeteer.launch({
        headless: false,
        defaultViewport: null,
        args: ["--start-maximized", "--incognito"],
        slowMo: 400,
    });

    // creates an empty page
    // await browser.newPage();
    // returns array of curently open tab
    let numberofPages = await browser.pages();
    let tab = numberofPages[0];

    // goto page
    await tab.goto("https://www.youtube.com");

    //sign in
    await tab.waitForSelector(
        ".style-scope.ytd-button-renderer.style-suggestive.size-small"
    );
    await tab.click(
        ".style-scope.ytd-button-renderer.style-suggestive.size-small"
    );

    // username with input attribute
    await tab.waitForSelector("input[type = 'email']");
    await tab.type("input[type = 'email']", "visionfriday123@gmail.com", {
        delay: 500,
    });

    // Click next
    await tab.click(".ZFr60d.CeoRYc", {
        delay: 500,
    });

    //Password
    await tab.waitForSelector(".whsOnd.zHQkBf");
    await tab.type(".whsOnd.zHQkBf", "Fri123day123", {
        delay: 500,
    });

    // click next
    await tab.waitForSelector(".ZFr60d.CeoRYc");
    await tab.click(".ZFr60d.CeoRYc");

    // Youtube Search box
    await tab.waitForSelector(".ytd-searchbox");
    await tab.click(".ytd-searchbox");
    await tab.type(".ytd-searchbox", "mkbhd", {
        delay: 200,
    });

    // YT search button
    await tab.click("#search-icon-legacy");

    // first video click
    await tab.waitForSelector(".style-scope.ytd-video-renderer");
    await tab.click(".style-scope.ytd-video-renderer");

    // video like
    await tab.waitForSelector(".style-scope.ytd-toggle-button-renderer");
    await tab.click(".style-scope.ytd-toggle-button-renderer");

    //Subscribe
    await tab.click(".style-scope.ytd-subscribe-button-renderer");

})();