var moveZeroes = function (nums) {
  let count = 0;
  for (let i = 0; i < nums.length; i++) {
    let char = nums[i];
    if (char === 0) {
      nums.splice(i, 1);
      count++;
      i -= 1;
    }
  }

  while (count > 0) {
    nums.push(0);
    count--;
  }
  return nums;
};
