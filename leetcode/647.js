var countSubstrings = function (s) {
  let count = 0;

  for (let i = 0; i < s.length; i++) {
    isPalindrome(i, i);
    isPalindrome(i, i + 1);
  }

  function isPalindrome(left, right) {
    while (left >= 0 && right <= s.length && s[left] === s[right]) {
      count++;
      left--;
      right++;
    }
  }
  return count;
};
