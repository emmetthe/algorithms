var longestPalindrome = function (s) {
  let longest = '';
  if (s.length < 2) return s;
  for (let i = 0; i < s.length; i++) {
    let word1 = expandMiddle(s, i, i);
    let word2 = expandMiddle(s, i, i + 1);

    let currWord = word1.length < word2.length ? word2 : word1;
    if (currWord.length > longest.length) {
      longest = currWord;
    }
  }
  return longest;
};

function expandMiddle(string, left, right) {
  while (left >= 0 && right < string.length && string[left] === string[right]) {
    left--;
    right++;
  }
  return string.substring(left + 1, right);
}
