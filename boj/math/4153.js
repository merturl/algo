let fs = require("fs");
const filePath = process.platform === "win32" ? "./input.txt" : "/dev/stdin";
const input = fs.readFileSync(filePath).toString().split("\n");
for (let i = 0; i < input.length; i++) {
  const [a, b, c] = input[i]
    .split(" ")
    .map((num) => Math.pow(parseInt(num, 10), 2));
  if (a === 0 && b === 0 && c === 0) break;
  if (a + b === c || a + c === b || b + c === a) {
    console.log("right");
  } else {
    console.log("wrong");
  }
}
