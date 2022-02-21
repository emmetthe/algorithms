function numberOfCharactersEscaped(expression) {
  let alpha = 'abcdefghijklmnopqrstuvwxyz';
  let open = false;
  let count = 0;

  for (let i = 0; i < expression.length; i++) {
    const char = expression[i];
    const lowerCase = alpha.includes(char);
    const prev = expression[i - 1] === '!';

    if (char === '#') open = !open;
    if (open && lowerCase && prev) count++;
  }
  return count;
}
