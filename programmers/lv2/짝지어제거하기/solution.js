function solution(s) {
  var answer = -1;
  const stack = [];
  for (const c of s) {
    if (stack.length === 0) {
      stack.push(c);
    } else {
      if (c === stack[stack.length - 1]) {
        stack.pop();
      } else {
        stack.push(c);
      }
    }
  }
  answer = stack.length === 0 ? 1 : 0;
  return answer;
}
