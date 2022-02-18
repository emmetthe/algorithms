var maxDepth = function (root) {
  const traverse = (node) => {
    if (node === null) return 0;
    if (node.left === null && node.right === null) return 1;

    let left = traverse(node.left);
    let right = traverse(node.right);
    return Math.max(left, right) + 1;
  };
  return traverse(root);
};
