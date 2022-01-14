var maxSubArray = function (nums) {
  let max = nums[0];
  for (let i = 1; i < nums.length; i++) {
    let curr = Math.max(nums[i], nums[i] + nums[i - 1]);
    nums[i] = curr;
    // console.log(nums[i])
    if (max < nums[i]) {
      max = nums[i];
    }
  }
  return max;
};
