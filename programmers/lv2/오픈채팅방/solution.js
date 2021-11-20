function solution(record) {
  var answer = [];
  var state = {};
  var inout = { Enter: "님이 들어왔습니다.", Leave: "님이 나갔습니다." };
  for (let i = 0, len = record.length; i < len; i++) {
    let temp = record[i].split(" ");
    if (temp[0] != "Change") {
      answer.push(temp);
    }
    if (temp[0] == "Enter" || temp[0] == "Change") {
      state[temp[1]] = temp[2];
    }
  }

  for (let i = 0, len = answer.length; i < len; i++) {
    let temp = state[answer[i][1]] + inout[answer[i][0]];
    answer[i] = temp;
  }
  return answer;
}
