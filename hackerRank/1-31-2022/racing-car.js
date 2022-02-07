function minimumMovement(obstacleLanes) {

  // create grid of car row
  let carRows = new Array(obstacleLanes.length).fill('').map(() => new Array(3).fill(''));

  // add obstacles to nested arrays
  for (let i = 0; i < carRows.length; i++) {
    carRows[i][obstacleLanes[i] - 1] = Infinity;
  }

  // start of moves
  carRows.unshift([1, 0, 1]);

  // check each position and assign it number of moves
  for (let i = 1; i < carRows.length; i++) {
    for (let j = 0; j < 3; j++) {
      let nextRow = carRows[i][j];
      let prevRow = carRows[i - 1][j];

      if (nextRow === '' && prevRow === Infinity) {
        carRows[i][j] = Math.min(...carRows[i - 1]) + 1;
      } else if (nextRow === '' && prevRow !== Infinity) {
        carRows[i][j] = carRows[i - 1][j];
      }
    }
  }
  return Math.min(...carRows[carRows.length - 1]);
}
