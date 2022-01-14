/*
 * Complete the 'maxProfit' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER costPerCut
 *  2. INTEGER salePrice
 *  3. INTEGER_ARRAY lengths
 */

function maxProfit(costPerCut, salePrice, lengths) {
  // Write your code here
  let maxProfit = -Infinity
  const max = Math.max(...lengths)

  for (let i=1; i<=max; i++) {
      maxProfit = calculate(i, salePrice, costPerCut, lengths, maxProfit);
  }
  return maxProfit;
}

function calculate(cutLength, salePrice, costPerCut, lengths, maxProfit) {
  let profit = 0;

  for (let length of lengths) {
      let totalUniformRods = Math.floor(length/cutLength);
      let totalCuts = Math.ceil(length / cutLength) - 1;
      let currProfit = totalUniformRods * cutLength * salePrice - (costPerCut * totalCuts);
      if (currProfit > 0) profit += currProfit
  }
  return Math.max(maxProfit, profit);
}