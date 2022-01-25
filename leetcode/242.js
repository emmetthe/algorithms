var isAnagram = function (s, t) {
  if (s.length !== t.length) return false;

  let table = {};

  for (const letter of s) {
    if (table[letter]) {
      table[letter] += 1;
    } else {
      table[letter] = 1;
    }
  }
  for (const letter of t) {
    if (table[letter]) {
      table[letter] -= 1;
    } else {
      table[letter] = 1;
    }
  }

  for (const el in table) if (table[el] !== 0) return false;

  return true;
};
