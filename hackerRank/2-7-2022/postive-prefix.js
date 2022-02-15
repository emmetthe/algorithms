function maxPosPrefixes(arr) {
  // Write your code here
  arr = arr.sort((a, b) => b - a);
  let results = [];
  let first = 0;
  let curr = 0;
  while (first < arr.length) {
    if (first === 0 && arr[0] > 0) {
      curr += arr[0];
    }
    if (curr > 0) {
      results.push(curr);
      first++;
      curr += arr[first];
    } else {
      first++;
    }
  }
  return results.length;
}
