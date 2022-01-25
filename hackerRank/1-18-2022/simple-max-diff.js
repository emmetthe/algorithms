function maxDifference(px) {
  // Write your code here
  let spread = 0;
  for (let i = px.length - 1; i > 0; i--) {
    let j = 0;
    while (j < i) {
      let diff = px[i] - px[j];
      spread = Math.max(diff, spread);
      j++;
    }
  }
  if (spread <= 0) return -1;
  return spread;
}
