var combinationSum4 = function (nums, target) {
  const arr = Array(target + 1).fill(0);
  arr[0] = 1;

  for (let i = 1; i <= target; i++) {
    let sum = 0;
    for (let j = 0; j <= nums.length - 1; j++) {
      if (i >= nums[j]) {
        sum += arr[i - nums[j]];
      }
    }

    arr[i] = sum;
  }

  return arr[arr.length - 1];
};

console.log(combinationSum4([2, 3, 5], 10))