var climbStairs = function (n) {
  let first = 0,
    second = 1;
  for (let i = 1; i <= n; i++) {
    [first, second] = [second, first + second];
    console.log(first, second);
  }
  return second;
};
