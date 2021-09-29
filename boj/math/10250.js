let fs = require("fs");
const filePath = process.platform === "win32" ? "./input.txt" : "/dev/stdin";
const input = fs
  .readFileSync(filePath)
  .toString()
  .split("\n")
  .map((input) => input.split(" ").map((num) => parseInt(num)));

for (let k = 1; k <= input[0]; k++) {
  const [width, height, customer] = input[k];
  let count = 0;
  for (let j = 1; j <= height; j++) {
    for (let i = 1; i <= width; i++) {
      const roomNumber = `${i}${j < 10 ? `0${j}` : j}`;
      count++;
      if (count === customer) console.log(roomNumber);
    }
  }
}
