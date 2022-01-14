var hammingWeight = function (n) {
  let count = 0;
  let arr = n.toString(2).split('');
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === '1') {
      count++;
    }
  }

  return count;
};
