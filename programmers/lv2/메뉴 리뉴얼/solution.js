function solution(orders, course) {
  var answer = [];

  const arr = [];
  orders.map((order) => {
    arr.push(order.split(""));
  });
  return answer;
}

solution(["ABCFG", "AC", "CDE", "ACDE", "BCFG", "ACDEH"], [2, 3, 4]);
// solution("ababcdcdababcdcd");
// solution("abcabcdede");

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

const a = getCombinations(["a", "b", "c"], 2);
console.log(a);
