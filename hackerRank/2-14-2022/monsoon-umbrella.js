function getUmbrellas(requirement, sizes) {
  // Write your code here
  let dp = new Array(requirement + 1).fill(Infinity);

  dp[0] = 0;
  for (let i = 1; i < requirement; i++) {
    for (let size of sizes) {
      if (i - size >= 0) {
        dp[i] = Math.min(dp[i], 1 + dp[i - size]);
      }
    }
  }
  if (dp[requirement] != Infinity) return dp[requirement];
  return -1;
}
