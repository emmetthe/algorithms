var maxProduct = function (nums) {
  let min = nums[0];
  let max = nums[0];
  let curr = nums[0];
  for (let i = 1; i < nums.length; i++) {
    let temp = min;
    min = Math.min(nums[i], min * nums[i], max * nums[i]);
    max = Math.max(nums[i], temp * nums[i], max * nums[i]);
    curr = Math.max(max, curr);
  }
  return curr;
};
