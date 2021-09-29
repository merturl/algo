let fs = require("fs");
const filePath = process.platform === "win32" ? "./input.txt" : "/dev/stdin";
let [x, y, w, h] = fs.readFileSync(filePath).toString().split(" ");

const xMin = Math.min(x, w - x);
const yMin = Math.min(y, h - y);

console.log(Math.min(xMin, yMin));
