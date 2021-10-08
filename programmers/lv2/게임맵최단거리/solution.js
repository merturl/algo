function solution(maps) {
  var answer = 0;
  var visited = [];
  for (let i = 0; i < maps.length; i++) {
    visited[i] = new Array(maps.length).fill(0);
  }

  const bfs = (y, x) => {
    const xMove = [0, 0, -1, 1];
    const yMove = [1, -1, 0, 0];
    const queue = [];
    queue.push([y, x]);
    visited[y][x] = 1;

    while (queue.length) {
      const [currentY, currentX] = queue.shift();
      for (let i = 0; i < 4; i++) {
        const nextX = currentX + xMove[i];
        const nextY = currentY + yMove[i];
        if (
          nextY >= 0 &&
          nextY < maps.length &&
          nextX >= 0 &&
          nextX < maps.length
        ) {
          if (!visited[nextY][nextX] && maps[nextY][nextX]) {
            visited[nextY][nextX] = visited[currentY][currentX] + 1;
            queue.push([nextY, nextX]);
          }
        }
      }
    }
  };

  bfs(0, 0);
  answer = visited[maps.length - 1][maps.length - 1];
  console.log(visited);
  return answer ? answer : -1;
}

solution([
  [1, 0, 1, 1, 1],
  [1, 0, 1, 0, 1],
  [1, 0, 1, 1, 1],
  [1, 1, 1, 0, 0],
  [0, 0, 0, 0, 1],
]);
