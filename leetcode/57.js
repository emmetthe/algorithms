var insert = function (intervals, newInterval) {
  let result = [];
  for (let i = 0; i < intervals.length; i++) {
    if (Math.max(intervals[i][0], newInterval[0]) <= Math.min(intervals[i][1], newInterval[1])) {
      newInterval = [Math.min(intervals[i][0], newInterval[0]), Math.max(intervals[i][1], newInterval[1])];
      continue;
    }
    let interval = intervals[i];
    if (interval[0] > newInterval[1]) {
      result.push(newInterval, ...intervals.slice(i));
      return result;
    }
    result.push(interval);
  }
  result.push(newInterval);
  return result;
};
