var mergeKLists = function (lists) {
  if (lists.length === 0) {
    return null;
  }
  while (lists.length > 1) {
    let list1 = lists.shift();
    let list2 = lists.shift();
    const mergedList = mergeLists(list1, list2);
    lists.push(mergedList);
  }
  return lists[0];
};

function mergeLists(list1, list2) {
  let head = new ListNode();
  let tail = head;
  while (list1 && list2) {
    if (list1.val > list2.val) {
      tail.next = list2;
      list2 = list2.next;
    } else {
      tail.next = list1;
      list1 = list1.next;
    }
    tail = tail.next;
  }
  tail.next = !list1 ? list2 : list1;
  return head.next;
}
