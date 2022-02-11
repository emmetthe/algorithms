var reverseList = function (head) {
  if (!head || !head.next) {
    return head;
  }

  let prev = null;
  let curr = head;
  while (curr) {
    let next = curr.next;
    curr.next = prev;
    prev = curr;
    curr = next;
  }
  return prev;
};