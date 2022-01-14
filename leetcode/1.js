var twoSum = function (nums, target) {
  let num = {};
  let res = [];
  for (let i = 0; i < nums.length; i++) {
    let diff = target - nums[i];
    if (num.hasOwnProperty(diff)) {
      let index = nums.indexOf(diff);
      res.push(i, index);
      break;
    } else {
      num[nums[i]] = 1;
    }
  }
  return res;
};
