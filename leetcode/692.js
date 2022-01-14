var topKFrequent = function (words, k) {
  let map = {};
  for (let i = 0; i < words.length; i++) {
    if (map[words[i]]) {
      map[words[i]]++;
    } else {
      map[words[i]] = 1;
    }
  }
  return Object.keys(map)
    .sort((a, b) => map[b] - map[a] || a.localeCompare(b))
    .slice(0, k);
};
