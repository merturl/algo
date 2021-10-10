function solution(user_id, banned_id) {
  var answer = [];
  const checkBan = (uid, bid) => {
    if (uid.length !== bid.length) return false;
    for (let i = 0; i < bid.length; i++) {
      if (bid[i] !== "*" && bid[i] !== uid[i]) return false;
    }
    return true;
  };
  const dfs = (uids, bids, ban) => {
    if (bids.length === 0) {
      answer.push(ban);
      return;
    }
    for (let i = 0; i < uids.length; i++) {
      if (checkBan(uids[i], bids[0])) {
        const newUid = [...uids.slice(0, i), ...uids.slice(i + 1)];
        dfs(newUid, bids.slice(1), [...ban, uids[i]]);
      }
    }
  };
  dfs(user_id, banned_id.slice(), []);
  return [...new Set(answer.map((banlist) => banlist.sort().join()))].length;
}

solution(["frodo", "fradi", "crodo", "abc123", "frodoc"], ["fr*d*", "abc1**"]);
