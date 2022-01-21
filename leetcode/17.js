var letterCombinations = function (digits) {
  if (digits.length === 0 || digits === '') return [];
  let map = {
    2: ['a', 'b', 'c'],
    3: ['d', 'e', 'f'],
    4: ['g', 'h', 'i'],
    5: ['j', 'k', 'l'],
    6: ['m', 'n', 'o'],
    7: ['p', 'q', 'r', 's'],
    8: ['t', 'u', 'v'],
    9: ['w', 'x', 'y', 'z']
  };
  let result = [];
  backtrack([], 0);
  return result;
  function backtrack(arr, index) {
    if (arr.length === digits.length) {
      result.push(arr.join(''));
      return;
    }
    for (let digit of map[digits[index]]) {
      arr.push(digit);
      backtrack(arr, index + 1);
      arr.pop();
    }
  }
};
