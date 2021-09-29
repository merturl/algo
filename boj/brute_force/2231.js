let fs = require("fs");
const filePath = process.platform === "win32" ? "./input.txt" : "/dev/stdin";
const input = fs.readFileSync(filePath).toString().split("\n");
const target = input[0] * 1;
let answer = 0;
for (let i = target; i > 0; i--) {
  const numbers = `${i}`
    .split("")
    .map((num) => parseInt(num))
    .reduce((acc, cur) => acc + cur, 0);
  if (numbers + i === target) {
    answer = i;
  }
}
