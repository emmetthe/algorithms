var addTwoNumbers = function (l1, l2) {
  const ans = new ListNode(0); // sum will be stored in ans
  let carry = 0,
    curr = ans; // answer will get updated in curr

  while (l1 || l2) {
    // checks whether l1 or l2 is null, if not null then continues evaluation of loop

    // val1  & val2 will contain the current value of node
    const val1 = l1 ? l1.val : 0;
    const val2 = l2 ? l2.val : 0;

    // if the next node is not empty then next node value will be stored in l1
    l1 = l1 ? l1.next : null;
    l2 = l2 ? l2.next : null;

    const sum = carry + val1 + val2;
    const value = sum % 10;

    carry = sum >= 10 ? 1 : 0; // since at most carry can be 1 and minimum carry will be 0

    curr.next = new ListNode(value); // the current will contain the sum
    curr = curr.next;
  }

  // if there is no next & we still have a carry then we have to add it using
  if (carry) {
    curr.next = new ListNode(1);
  }
  return ans.next; //here we are returning ans.next because we have added a 0 in   ans at start.
};
