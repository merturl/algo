function solution(rows, columns, queries) {
  var answer = [];
  const matrix = Array.from(new Array(rows), () => new Array(columns).fill(0));

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < columns; j++) {
      matrix[i][j] = i * columns + j + 1;
    }
  }

  for (let i = 0; i < queries.length; i++) {
    const [x1, y1, x2, y2] = queries[i];
    const stack = [];

    for (let i = y1 - 1; i < y2 - 1; i++) stack.push(matrix[x1 - 1][i]);
    for (let i = x1 - 1; i < x2 - 1; i++) stack.push(matrix[i][y2 - 1]);
    for (let i = y2 - 1; i > y1 - 1; i--) stack.push(matrix[x2 - 1][i]);
    for (let i = x2 - 1; i > x1 - 1; i--) stack.push(matrix[i][y1 - 1]);
    answer.push(Math.min(...stack));
    const temp = stack.pop();
    stack.unshift(temp);
    for (let i = y1 - 1; i < y2 - 1; i++) matrix[x1 - 1][i] = stack.shift();
    for (let i = x1 - 1; i < x2 - 1; i++) matrix[i][y2 - 1] = stack.shift();
    for (let i = y2 - 1; i > y1 - 1; i--) matrix[x2 - 1][i] = stack.shift();
    for (let i = x2 - 1; i > x1 - 1; i--) matrix[i][y1 - 1] = stack.shift();
  }

  return answer;
}

// solution(6, 6, [
//   [2, 2, 5, 4],
//   [3, 3, 6, 6],
//   [5, 1, 6, 3],
// ]);

solution(3, 3, [
  [1, 1, 2, 2],
  [1, 2, 2, 3],
  [2, 1, 3, 2],
  [2, 2, 3, 3],
]);

// solution(100, 97, [[1, 1, 100, 97]]);
