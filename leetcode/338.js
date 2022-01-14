/*
Example 1:
  num = 5
  arr = [0,1,1,2,1] up to 4. arr[2] = 1, and because 5%2 = 1, 5 contains 1+1 or 2 bits
Example 2: 
  num = 8
  arr = [0,1,1,2,1,2,2,3] up to 7. arr[4] = 1, and because 8%2 = 0, 8 contains 1+0 bits or 1 bit
*/

var countBits = function (num) {
  let arr = [0];
  for (let i = 1; i <= num; i++) {
    //we take the midpoint of the current arr
    //and we add 1, if the new number is NOT divisible by 2 (odd number)
    arr[i] = arr[Math.floor(i / 2)] + Math.floor(i % 2);
  }
  return arr;
};
