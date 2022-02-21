var isPalindrome = function (head) {
  let slow = head;
  let fast = head;

  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
  }

  let current = slow;
  let prev = null;

  while (current) {
    let next = current.next;
    current.next = prev;
    prev = current;
    current = next;
  }

  current = head;
  while (prev) {
    if (current.val !== prev.val) {
      return false;
    }
    current = current.next;
    prev = prev.next;
  }
  return true;
};
