var maxArea = function (height) {
  let h1 = 0;
  let h2 = height.length - 1;
  let area = 0;
  while (h1 < h2) {
    area = Math.max(area, (h2 - h1) * Math.min(height[h1], height[h2]));
    if (height[h1] < height[h2]) {
      h1++;
    } else {
      h2--;
    }
  }
  return area;
};
