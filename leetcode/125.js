var isPalindrome = function (s) {
  s = s.toLowerCase();
  let alpha = 'abcdefghijklmnopqrstuvwxyz1234567890';
  let str = '';
  for (let char of s) {
    if (alpha.includes(char)) {
      str += char;
    }
  }

  let i = 0;
  let j = str.length - 1;
  while (i < str.length / 2) {
    if (str[i] !== str[j]) {
      return false;
    }
    i++;
    j--;
  }
  return true;
};
