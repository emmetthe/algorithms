var removeNthFromEnd = function (head, n) {
  let dummy = new ListNode();
  let count = 1;
  let tail = dummy;
  let curr = head;
  while (curr.next) {
    if (count === n) {
      tail = tail.next;
    } else {
      tail.next = curr;
      count++;
    }
    curr = curr.next;
  }
  tail.next = tail.next.next;
  return dummy.next;
};
