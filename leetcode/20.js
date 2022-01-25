var isValid = function (s) {
  let queue = [];
  let pairs = {
    '(': ')',
    '[': ']',
    '{': '}'
  };
  for (let i = 0; i < s.length; i++) {
    let curr = s[i];
    if (curr === '(' || curr === '[' || curr === '{') {
      queue.push(curr);
    } else if (curr !== pairs[queue.pop()]) {
      return false;
    }
  }
  return queue.length === 0;
};
