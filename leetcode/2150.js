var findLonely = function (nums) {
  if (!nums) return [];
  let map = {};
  for (let char of nums) {
    if (map[char]) {
      map[char]++;
    } else {
      map[char] = 1;
    }
  }
  let ans = [];
  for (let item of nums) {
    let isTrue = !map[item - 1] && !map[item + 1] && map[item] == 1;
    if (isTrue) {
      ans.push(item);
    }
  }

  return ans;
};
