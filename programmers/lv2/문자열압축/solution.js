function solution(s) {
  var answer = s.length;

  for (let i = 1; i <= s.length / 2; i++) {
    let filter = s.substr(0, i);
    let count = 1;
    let newStr = "";
    for (let j = i; j < s.length; j += i) {
      const targetStr = s.substr(j, i);
      if (filter === targetStr) {
        count++;
      } else {
        if (count > 1) newStr += `${count}`;
        newStr += filter;
        count = 1;
        filter = s.substr(j, i);
      }
    }
    if (count > 1) newStr += `${count}`;
    newStr += filter;
    answer = Math.min(answer, newStr.length);
  }
  return answer;
}

solution("aabbaccc");
// solution("ababcdcdababcdcd");
// solution("abcabcdede");
