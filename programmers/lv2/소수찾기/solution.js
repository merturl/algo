function solution(numbers) {
  var answer = [];
  const isPrimeNumber = (num) => {
    if (num < 2) return false;
    for (let i = 2; i <= num / 2; i++) {
      if (num % i == 0) return false;
    }
    return true;
  };
  const getPermutations = (arr, selectNumber) => {
    const results = [];
    if (selectNumber === 1) return arr.map((value) => [value]);
    arr.forEach((fixed, index, origin) => {
      const rest = [...origin.slice(0, index), ...origin.slice(index + 1)];
      const permutations = getPermutations(rest, selectNumber - 1);
      const attached = permutations.map((permutation) => [
        fixed,
        ...permutation,
      ]);
      results.push(...attached);
    });

    return results;
  };

  for (let i = 0; i <= numbers.length; i++) {
    const new_numbers = getPermutations([...numbers], i);
    new_numbers.forEach((num) => {
      const temp = parseInt(num.join(""));
      if (isPrimeNumber(temp)) answer.push(temp);
    });
  }
  return new Set(answer).size;
}

solution("011");
