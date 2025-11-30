import chalk from "chalk";
import boxen from "boxen";

console.log(
    `
${chalk.green("npm create vite@latest")}
cd my-app
npm install
npm run dev
    `,
    { padding: 1, borderStyle: "round" }
);
