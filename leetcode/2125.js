var numberOfBeams = function (bank) {
  let laserNum = 0;
  let prevLasers = 0;

  for (let row = 0; row < bank.length; row++) {
    let lasers = 0;

    for (let col = 0; col < bank[row].length; col++) {
      if (bank[row][col] === '1') lasers++;
    }

    if (lasers === 0) continue;

    laserNum += prevLasers * lasers;
    prevLasers = lasers;
  }

  return laserNum;
};
