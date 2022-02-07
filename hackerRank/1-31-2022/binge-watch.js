function findMinimumDays(durations) {
  durations.sort((a, b) => a - b);

  let left = 0;
  let right = durations.length - 1;
  let days = 0;

  while (left <= right) {
    const first = durations[left];
    const second = durations[right];

    if (first + second <= 3) {
      days++;
      right--;
      left++;
    } else {
      days++;
      right--;
    }
  }
  return days;
}
