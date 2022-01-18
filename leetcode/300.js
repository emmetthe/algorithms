const lengthOfLIS = (nums) => {
  let arr = new Array(nums.length).fill(1);
  let longest = 1;
  for (let i = 1; i < nums.length; i++) {
    for (let j = 0; j < i; j++) {
      if (nums[j] < nums[i]) {
        arr[i] = Math.max(arr[i], arr[j] + 1);
        longest = Math.max(longest, arr[i]);
      }
    }
  }
  return longest;
};
