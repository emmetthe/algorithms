var maxProfit = function (prices) {
  let maxProfit = 0;
  let min = prices[0];

  for (let j = 1; j < prices.length; j++) {
    if (prices[j] < min) {
      min = prices[j];
    } else {
      let profit = prices[j] - min;
      maxProfit = profit > maxProfit ? profit : maxProfit;
    }
  }

  return maxProfit;
};
