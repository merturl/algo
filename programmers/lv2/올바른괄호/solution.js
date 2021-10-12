function solution(s) {
  var answer = true;
  const stack = [];
  for (let i = 0; i < s.length; i++) {
    if (stack.length === 0) {
      stack.push(s[i]);
    } else {
      if (s[i] === "(") {
        stack.push(s[i]);
      } else {
        const lastChar = stack[stack.length - 1];
        if (lastChar === "(") stack.pop();
      }
    }
  }
  answer = stack.length > 0 ? false : true;
  return answer;
}
