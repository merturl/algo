function solution(w, h) {
  const gcd = (num1, num2) => {
    if (num2 == 0) return num1;
    return gcd(num2, num1 % num2);
  };
  var answer = w * h - (w + h - gcd(w, h));
  return answer;
}

solution(8, 12);
// solution("ababcdcdababcdcd");
// solution("abcabcdede");
