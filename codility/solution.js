function solution(N) {
  const convertToBinary = (dec) => {
    return (dec >>> 0).toString(2);
  };
  let max = 0;
  let flag = false;
  let count = 0;
  const binary = convertToBinary(N);
  for (let i = 0; i < binary.length; i++) {
    if (flag) {
      if (binary[i] === "0") {
        count++;
      } else {
        max = Math.max(max, count);
        count = 0;
      }
    } else {
      if (binary[i] === "1") {
        flag = true;
        max = Math.max(max, count);
        count = 0;
      }
    }
  }
  return max;
}

function solution(N) {
  const binaryNum = N.toString(2);
  const binaryGaps = binaryNum.slice(
    binaryNum.indexOf("1") + 1,
    binaryNum.lastIndexOf("1")
  );
  console.log(binaryNum, binaryGaps);
  const zeroCounted = binaryGaps.split("1").map((zeros) => zeros.length);

  return zeroCounted.length ? Math.max(...zeroCounted) : 0;
}
solution(1041);

// Best Code
