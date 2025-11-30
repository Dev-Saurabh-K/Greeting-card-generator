import {
  normal,
  elegantDarkLuxury,
  softGlassmorphism,
  retroPopBrutalist,
  bohoArch,
} from "./templates/img.template.js";

import { htmlToImage } from "./controllers/img.controller.js";

import readline from "readline-sync";

const designs = {
  1: normal,
  2: elegantDarkLuxury,
  3: softGlassmorphism,
  4: retroPopBrutalist,
  5: bohoArch,
};

// console.log(designs[1]);
var i=0
while (i<100) {
  let index = readline.question(
    "-----Designs Available:-----\n1.normal\n2.nelegantDarkLuxury\n3.softGlassmorphism\n4.retroPopBrutalist\n5.bohoArch\n\n\nType Design Index to continue..."
  );
  if (designs[index]!=undefined) {
    console.log(index, ":", designs[index]);

    let name = readline.question("Enter your Name: ");
    console.log("Fill details about Bithday Boy...");
    let bname = readline.question("Enter Name: ");
    let dob = readline.question("Enter dd/mm/yyyy");
    htmlToImage(name, bname, dob, designs[index], i);
    break;
  } else {
    console.log("Invalid Input! Try Again.....");
  }
}
