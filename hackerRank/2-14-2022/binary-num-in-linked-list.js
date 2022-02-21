function getNumber(binary) {
  // Write your code here
  let total = 0n;
  while (binary) {
    total *= 2n;
    total += BigInt(binary.data);
    binary = binary.data;
  }
  return total;
}
