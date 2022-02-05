var isSymmetric = function (root) {
  if (!root) return true;

  const symmetry = (nodeL, nodeR) => {
    if (!nodeL && !nodeR) return true;
    if (nodeL?.val !== nodeR?.val) return false;
    else return symmetry(nodeL.left, nodeR.right) && symmetry(nodeL.right, nodeR.left);
  };

  return symmetry(root.left, root.right);
};
