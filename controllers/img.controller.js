import puppeteer from "puppeteer";

async function htmlToImage(name, bname, dob ,design, i) {
  const browser = await puppeteer.launch({
    headless: "new",
  });

  const page = await browser.newPage();


  await page.setContent(design(name,bname,dob), { waitUntil: "domcontentloaded" });

  // await page.screenshot({
  //   path: 'output.png',
  //   fullPage: true,
  // });
  const element = await page.$("#card");

  await element.screenshot({
    path: `card_${bname}_${i}.png`,
    type: "png",
  });

  await browser.close();
}

export { htmlToImage };
