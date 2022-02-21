function getNumber(binary) {
  // Write your code here
  let str = '';
  let curr = binary;
  while (curr) {
    str += curr.data;
    curr = curr.next;
  }
  return parseInt(str, 2);
}
