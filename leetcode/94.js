var inorderTraversal = function (root) {
  let res = [];
  if (!root) return res;

  const traverse = (root) => {
    if (root.left) {
      traverse(root.left);
    }
    res.push(root.val);
    if (root.right) {
      traverse(root.right);
    }
  };

  traverse(root);
  return res;
};
