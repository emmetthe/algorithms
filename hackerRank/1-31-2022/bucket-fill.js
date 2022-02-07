function strokesRequired(picture) {
  let matrix = picture.map((ele) => ele.split(''));
  let visited = matrix.map((row) => row.map((value) => false));

  let count = 0;
  for (let row = 0; row < matrix.length; row++) {
    for (let col = 0; col < matrix[0].length; col++) {
      if (!visited[row][col]) {
        let letter = matrix[row][col];
        colour(row, col, letter, visited, matrix);
        count++;
      }
    }
  }
  return count;
}

function colour(row, col, letter, visited, matrix) {
  let squares = [[row, col]];

  while (squares.length) {
    let node = squares.pop();
    let x = node[0];
    let y = node[1];
    visited[x][y] = true;
    let neighbors = getNeighbors(x, y, letter, visited, matrix);
    squares = squares.concat(neighbors);
  }
}

function getNeighbors(row, col, letter, visited, matrix) {
  let directions = [
    [1, 0],
    [0, 1],
    [-1, 0],
    [0, -1]
  ];
  let neighbors = [];

  for (let dir of directions) {
    let newX = row + dir[0];
    let newY = col + dir[1];

    if (newX >= 0 && newX < matrix.length && newY >= 0 && newY < matrix[0].length) {
      if (!visited[newX][newY]) {
        if (matrix[newX][newY] === letter) {
          neighbors.push([newX, newY]);
          visited[newX][newY] = true;
        }
      }
    }
  }
  return neighbors;
}
