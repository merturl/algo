function solution(s) {
  var answer = [];
  const set = new Set();
  const a = s
    .substring(1, s.length - 1)
    .split(/\{(.*?)\}/)
    .filter((item) => item !== "" && item !== ",")
    .map((item) => item.split(","));
  const c = a.sort((a, b) => a.length - b.length);
  for (let i = 0; i < c.length; i++) {
    for (let j = 0; j < c[i].length; j++) {
      set.add(parseInt(c[i][j], 10));
    }
  }
  answer = [...set];
  return answer;
}

solution("{{1,2,3},{2,1},{1,2,4,3},{2}}");
