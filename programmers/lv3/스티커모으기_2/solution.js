function solution(sticker) {
  var answer = 0;
  let length = sticker.length;

  if (length <= 3) {
    return Math.max(...sticker);
  }

  // 배열을 미리 생성해놓아야 더 빠르다.
  const startFirst = new Array(length - 1).fill(0);
  const startSecond = new Array(length - 1).fill(0);

  startFirst[0] = startFirst[1] = sticker[0];
  startSecond[0] = 0;
  startSecond[1] = sticker[1];
  for (let i = 2; i < length - 1; i++) {
    startFirst[i] = Math.max(startFirst[i - 1], startFirst[i - 2] + sticker[i]);
    startSecond[i] = Math.max(
      startSecond[i - 1],
      startSecond[i - 2] + sticker[i]
    );
  }
  startSecond[length - 1] = Math.max(
    startSecond[length - 2],
    startSecond[length - 3] + sticker[length - 1]
  );
  answer = Math.max(
    startFirst[startFirst.length - 1],
    startSecond[startSecond.length - 1]
  );

  return answer;
}
