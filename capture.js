const puppeteer = require('puppeteer');
(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  
  // Desktop
  await page.setViewport({width: 1214, height: 1933});
  await page.goto('http://localhost:3000/technology/goodwe', {waitUntil: 'networkidle2'});
  await page.screenshot({path: 'desktop.png', fullPage: true});
  
  // Mobile
  await page.setViewport({width: 375, height: 812});
  await page.screenshot({path: 'mobile.png', fullPage: true});
  
  await browser.close();
})();
