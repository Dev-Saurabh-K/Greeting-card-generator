import puppeteer from "puppeteer";
import { aiGenerateGreeting } from "./ai.text.controller.js";

async function htmlToImage(name, bname, dob, design, i, mode) {
  const browser = await puppeteer.launch({
    headless: "new",
  });

  const page = await browser.newPage();

  if (mode == 1) {
    await page.setContent(design(name, bname, dob), {
      waitUntil: "domcontentloaded",
    });
    var element = await page.$("#card");
  } else if (mode == 2) {
    const response = await aiGenerateGreeting(name, bname, dob);
    await page.setContent(response.designHtml, {
      waitUntil: "domcontentloaded",
    });
    var element = await page.$("#card");
  }

  // await page.screenshot({
  //   path: 'output.png',
  //   fullPage: true,
  // });
  

  await element.screenshot({
    path: `card_${bname}_${i}.png`,
    type: "png",
  });

  await browser.close();
}

export { htmlToImage };
