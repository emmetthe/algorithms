function scatterPalindrome(strToEvaluate) {
  // Write your code here
  let count = 0;
  let combos = combinations(strToEvaluate);
  for (let i = 0; i < combos.length; i++) {
    if (isPalindrome(combos[i])) {
      count += 1;
    }
  }
  return count;
}

function combinations(str) {
  let combos = [];
  for (let i = 0; i < str.length; i++) {
    for (let j = i + 1; j < str.length + 1; j++) {
      combos.push(str.slice(i, j));
    }
  }
  return combos;
}

function isPalindrome(str) {
  let count = {};
  for (let i = 0; i < str.length; i++) {
    if (str[i] in count) {
      count[str[i]] += 1;
    } else {
      count[str[i]] = 1;
    }
  }
  let val = Object.keys(count);
  for (let i = 0; i < val.length; i++) {
    if (str.length === 1) {
      return true;
    } else {
      if (!isEven(count[val[i]])) {
        return false;
      }
    }
  }
  return true;
}

function isEven(num) {
  if (num % 2 !== 0) {
    return false;
  } else {
    return true;
  }
}
