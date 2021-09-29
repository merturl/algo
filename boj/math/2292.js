let fs = require("fs");
const filePath = process.platform === "win32" ? "./input.txt" : "/dev/stdin";
const input = fs.readFileSync(filePath).toString().split("\n");
const target = input[0] * 1;
let count = 1;
let sum = 1;
while (target > sum) {
  sum += count * 6;
  count += 1;
}

console.log(count);
