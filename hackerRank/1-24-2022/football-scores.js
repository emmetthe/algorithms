function counts(teamA, teamB) {
  let res = [];
  teamA = teamA.sort((a, b) => a - b);
  for (let score of teamB) {
    let min = 0;
    let max = teamA.length;
    while (min <= max) {
      let mid = Math.floor((min + max) / 2);
      if (teamA[mid] > score) max - mid - 1;
      else min = mid + 1;
    }
    res.push(min);
  }
  return res;
}
