/*
 * Complete the 'countPairs' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER_ARRAY numbers
 *  2. INTEGER k
 */

// Example
// n = 4
// numbers = [1, 1, 1, 2]
// k = 1

// This array has three different valid pairs: (1, 1) and (1, 2) and (2, 2). For k = 1, there is only 1 valid pair which satisfies a + k = b: the pair (a, b) = (1, 2).

function countPairs(numbers, k) {
  // Write your code here

  let nums = new Set();
  let pairs = new Set();

  for (let i = 0; i < numbers.length; i++) nums.add(numbers[i]);

  for (let num of nums) {
    let complement = num + k;
    let pair = [num, complement].sort((a, b) => a - b);
    if (nums.has(complement)) pairs.add(pair);
  }

  return pairs.size;
}
