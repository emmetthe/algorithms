var singleNumber = function (nums) {
  let count = {};
  for (let i = 0; i < nums.length; i++) {
    let num = nums[i];
    if (count[num]) {
      delete count[num];
    } else {
      count[num] = 1;
    }
  }
  return Object.keys(count)[0];
};
