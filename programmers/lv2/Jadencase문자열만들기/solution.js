function solution(s) {
  var answer = s
    .split(" ")
    .map((word) => convertJadenCase(word))
    .join(" ");

  return answer;
}

function convertJadenCase(word) {
  if (word.length === 0) return;
  let result = "";
  for (let i = 0; i < word.length; i++) {
    const ascii = word[i].charCodeAt();
    if (ascii <= 57) {
      result += word[i];
    } else if (ascii <= 90) {
      if (i === 0) {
        result += word[i];
      } else {
        result += String.fromCharCode(ascii + 32);
      }
    } else {
      if (i === 0) {
        result += String.fromCharCode(ascii - 32);
      } else {
        result += word[i];
      }
    }
  }
  return result;
}
