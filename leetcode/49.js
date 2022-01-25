var groupAnagrams = function (strs) {
  let groups = [];
  let sorted = {};
  for (let i = 0; i < strs.length; i++) {
    let word = strs[i].split('').sort().join('');
    if (sorted[word]) {
      sorted[word].push(strs[i]);
    } else {
      sorted[word] = [strs[i]];
    }
  }
  let values = Object.values(sorted);
  for (let value of values) {
    groups.push(value);
  }
  return groups;
};
