var wordBreak = function (s, wordDict) {
  let arr = new Array(s.length + 1).fill(false);

  arr[0] = true;

  for (let i = 0; i <= s.length; i++) {
    if (arr[i] === true) {
      for (let word of wordDict) {
        if (s.slice(i, i + word.length) === word) {
          arr[i + word.length] = true;
        }
      }
    }
  }
  return arr[s.length];
};
