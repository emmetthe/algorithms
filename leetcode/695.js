var maxAreaOfIsland = function (grid) {
  let maxArea = 0;

  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      let islandArea = 0;

      if (grid[i][j] === 1) {
        const dfs = (row, col) => {
          if (grid[row] && grid[row][col] === 1) {
            grid[row][col] = -1;
            return 1 + dfs(row + 1, col) + dfs(row - 1, col) + dfs(row, col + 1) + dfs(row, col - 1);
          }

          return 0;
        };
        dfs(i, j);
        maxArea = Math.max(maxArea, islandArea);
      }
    }
  }
  return maxArea;
};
