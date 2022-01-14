var reverseBits = function (n) {
  let binary = n.toString(2);
  const zeroes = 32 - binary.length;
  for (let index = 0; index < zeroes; index++) {
    binary = '0' + binary;
  }
  return parseInt(binary.split('').reverse('').join(''), 2);
};
