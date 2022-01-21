var characterReplacement = function (s, k) {
  let left = 0;
  let right = 0;
  let map = {};
  let max = 0;

  while (right < s.length) {
    let char = s[right];
    map[char] = map[char] ? map[char] + 1 : 1;
    max = Math.max(max, map[char]);

    if (right - left + 1 - max > k) {
      map[s[left]]--;
      left++;
    }
    right++;
  }
  return right - left;
};
