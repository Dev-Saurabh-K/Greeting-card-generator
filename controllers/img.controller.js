import puppeteer from "puppeteer";
import {
  normal,
  elegantDarkLuxury,
  softGlassmorphism,
  retroPopBrutalist,
  bohoArch,
} from "../templates/img.template.js";

async function htmlToImage() {
  const browser = await puppeteer.launch({
    headless: "new",
  });

  const page = await browser.newPage();

  // Your HTML content
  const html = `
    <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Birthday Card - Tailwind</title>
    
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Great+Vibes&family=Inter:wght@300;400;600&display=swap" rel="stylesheet">

    <script src="https://cdn.tailwindcss.com"></script>

    <script>
        tailwind.config = {
            theme: {
                extend: {
                    fontFamily: {
                        'script': ['"Great Vibes"', 'cursive'],
                        'sans': ['"Inter"', 'sans-serif'],
                    },
                    colors: {
                        // You can change this single color to update the theme
                        'brand': '#ec4899', // Pink-500
                    }
                }
            }
        }
    </script>
</head>
<body class="bg-gray-100 min-h-screen flex items-center justify-center p-6">

    <div id="card" class="max-w-md w-full bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100">
        
        <div class="relative h-72">
            <img 
                src="https://images.unsplash.com/photo-1513151233558-d860c5398176?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="Birthday Vibes" 
                class="w-full h-full object-cover"
            >
            <div class="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
        </div>

        <div class="p-8 text-center">
            
            <h1 class="font-script text-6xl text-brand mb-2">Happy Birthday</h1>
            
            <p class="uppercase tracking-[0.2em] text-gray-400 text-xs font-bold mb-6">
                To My Dearest Friend
            </p>

            <div class="w-16 h-1 bg-brand mx-auto rounded-full mb-6"></div>

            <p class="text-gray-600 leading-loose font-light mb-8">
                Wishing you a day that is as special in every way as you are. 
                May this year bring you endless opportunities, love, and laughter.
                Cheers to another trip around the sun!
            </p>

            <div class="mt-4">
                <span class="block text-gray-900 font-semibold text-sm">
                    With love, <br> Alex & The Team
                </span>
            </div>

        </div>
    </div>

</body>
</html>
  `;

  await page.setContent(elegantDarkLuxury, { waitUntil: "networkidle0" });

  // await page.screenshot({
  //   path: 'output.png',
  //   fullPage: true,
  // });
  const element = await page.$("#card");

  await element.screenshot({
    path: "card-only.png",
    type: "png",
  });

  await browser.close();
}

export { htmlToImage };
