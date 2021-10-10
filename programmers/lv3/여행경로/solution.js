function solution(tickets) {
  var answer = [];
  tickets.sort();

  const dfs = (remainTickets, start, path) => {
    const newPath = [...path, start];
    if (remainTickets.length === 0) {
      answer.push(newPath);
    }
    for (let i = 0; i < remainTickets.length; i++) {
      const [to, from] = remainTickets[i];
      const newArray = [
        ...remainTickets.slice(0, i),
        ...remainTickets.slice(i + 1),
      ];
      if (to === start) {
        dfs(newArray, from, newPath);
      }
    }
  };

  dfs(tickets, "ICN", []);
  answer.sort();
  return answer[0];
}

solution([
  ["ICN", "SFO"],
  ["ICN", "ATL"],
  ["SFO", "ATL"],
  ["ATL", "ICN"],
  ["ATL", "SFO"],
]);
