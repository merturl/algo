function solution(skill, skill_trees) {
  var answer = 0;

  for (let i = 0; i < skill_trees.length; i++) {
    let copySkill = "";
    for (let j = 0; j < skill_trees[i].length; j++) {
      const index = skill.indexOf(skill_trees[i][j]);
      console.log(index);
      if (index === -1) {
        copySkill += skill_trees[i][j];
      } else {
        if (index === 0 || copySkill.includes(skill[index - 1])) {
          copySkill += skill_trees[i][j];
        }
      }
    }
    if (copySkill.length === skill_trees[i].length) answer++;
  }

  return answer;
}
