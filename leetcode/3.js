var lengthOfLongestSubstring = function (s) {
  let set = new Set();
  let left = 0;
  let right = 0;
  let max = 0;
  let count = 0;

  while (right < s.length) {
    if (left === right || set.has(s[right]) == false) {
      set.add(s[right]);
      right++;
      count++;
    } else {
      set.delete(s[left]);
      left++;
      count--;
    }
    max = Math.max(max, count);
  }
  return max;
};
