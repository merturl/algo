function solution(n) {
  var answer = "";
  const units = [4, 1, 2];
  while (n) {
    answer = units[n % 3] + answer;
    if (n % 3 === 0) {
      n = n / 3 - 1;
    } else {
      n = Math.floor(n / 3);
    }
  }
  return answer;
}

solution(1);
solution(2);
solution(3);
solution(4);
