import puppeteer from 'puppeteer';


const browser = await puppeteer.launch({
  browser: "firefox"
});

const page = await browser.newPage();

await page.setViewport({
  width: 1080,
  height: 1920,
  deviceScaleFactor: 2,
  isMobile: false
});

await page.goto("file:///home/tona/github/pokespan-cards/Pokemon_mod/generated/index.html");

await page.screenshot({ path: "fullpage.png" })

const cards = await page.$$(".card");
let i = 1;
for(const card of cards) {
  if(await card.isVisible()) {
    const filename = "output/" + i.toString().padStart(3, "0") + ".png";
    await card.screenshot({
      path: filename,
    });
    i++;
  }
}
// ...
await browser.close();