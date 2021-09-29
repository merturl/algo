function solution(enroll, referral, seller, amount) {
  var answer = [];
  const tree = {};
  tree["-"] = { parent: null, money: 0 };
  const accumulateMoney = (name, money) => {
    const current = tree[name];
    if (!money || !current.parent) return;
    const parentMoney = Math.floor(money * 0.1);
    current.money += money - parentMoney;
    accumulateMoney(current.parent, parentMoney);
  };
  enroll.map((name, i) => {
    tree[name] = { parent: referral[i], money: 0 };
  });
  seller.map((name, i) => {
    accumulateMoney(name, amount[i] * 100);
  });
  answer = enroll.map((name) => tree[name].money);
  return answer;
}

solution(
  ["john", "mary", "edward", "sam", "emily", "jaimie", "tod", "young"],
  ["-", "-", "mary", "edward", "mary", "mary", "jaimie", "edward"],
  ["young", "john", "tod", "emily", "mary"],
  [12, 4, 2, 5, 10]
);
