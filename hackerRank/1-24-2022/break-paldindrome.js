function breakPalindrome(str) {
  let tempStr = str.split('');
  let len = Math.floor(tempStr.length / 2);
  for (let i = 0; i < len; i++) {
    if (tempStr[i] !== 'a') {
      tempStr[i] = 'a';
      return tempStr.join('');
    }
  }
  return 'IMPOSSIBLE';
}
