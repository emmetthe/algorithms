function droppedRequests(requestTime) {
  // Write your code here
  const set = new Set(requestTime);
  const freq = {};
  let dropped = 0;

  for (let i = 0; i < requestTime.length; i++) {
    const reqTime = requestTime[i];
    if (!freq[reqTime]) freq[reqTime] = { ones: 0, tens: 0, mins: 0 };
    freq[reqTime].ones++;

    for (let j = 0; j < 60; j++) {
      const newRT = reqTime + j;
      if (!set.has(newRT)) continue;
      if (!freq[newRT]) freq[newRT] = { ones: 0, tens: 0, mins: 0 };
      if (j < 10) freq[newRT].tens++;
      freq[newRT].mins++;
    }
    if (freq[reqTime].ones > 3 || freq[reqTime].tens > 20 || freq[reqTime].mins > 60) dropped++;
  }
  return dropped;
}
