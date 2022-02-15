function maxTickets(tickets) {
  tickets = tickets.sort((a, b) => a - b);
  let curr = 0;
  let next = 0;
  while (curr < tickets.length && next < tickets.length) {
    if (Math.abs(tickets[curr] - tickets[next]) > 1) {
      curr++;
      next++;
    } else {
      next++;
    }
  }
  return Math.abs(curr - next);
}
