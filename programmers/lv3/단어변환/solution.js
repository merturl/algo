function solution(begin, target, words) {
  var answer = 0;
  const visits = Array(words.length).fill(false);
  const counts = [];
  const dfs = (current, depth) => {
    if (current === target) {
      counts.push(depth);
      return;
    } else {
      for (const word of words) {
        const index = words.indexOf(word);
        if (index !== -1) {
          if (visits[index] === true) continue;
          let diff = 0;
          [...word].map((char, i) => {
            if (char !== current[i]) {
              diff++;
            }
          });
          if (diff === 1) {
            visits[index] = true;
            dfs(word, depth + 1);
            visits[index] = false;
          }
        }
      }
    }
  };
  dfs(begin, 0);
  if (counts.length !== 0) {
    answer = Math.min(...counts);
  }
  return answer;
}
