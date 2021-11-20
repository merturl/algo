const getCombinations = (array, selectNumber) => {
  const results = [];
  if (selectNumber === 1) {
    return array.map((element) => [element]);
  }
  array.forEach((fixed, index, origin) => {
    const rest = origin.slice(index + 1);
    const combinations = getCombinations(rest, selectNumber - 1);
    const attached = combinations.map((combination) =>
      [fixed, ...combination].join("")
    );
    results.push(...attached);
  });
  return results;
};

function solution(orders, course) {
  var answer = [];

  course.map((value) => {
    let menu = [];
    let maxOrders = 2;
    const candidates = {};
    orders.map((order) =>
      getCombinations(order.split("").sort(), value).map((com) => {
        if (candidates[com]) {
          candidates[com]++;
        } else {
          candidates[com] = 1;
        }
      })
    );
    for (const key in candidates) {
      if (candidates[key] > maxOrders) {
        menu = [key];
        maxOrders = candidates[key];
      } else if (maxOrders === candidates[key]) {
        menu.push(key);
      }
    }
    console.log(candidates);
    answer.push(...menu);
  });
  console.log(answer.sort());
  return answer.sort();
}

solution(["ABCDE", "AB", "CD", "ADE", "XYZ", "XYZ", "ACD"], [2, 3, 5]);
// solution("ababcdcdababcdcd");
// solution("abcabcdede");
