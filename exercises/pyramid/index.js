// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'

function _pyramid(n) {
  const startHashIndex = n - 1;
  const countCols = 2 * n - 1;
  for (let row = 0; row < n; row++) {
    let pyramid = "";
    for (let col = 0; col < countCols; col++) {
      if (col < startHashIndex - row || col > startHashIndex + row) {
        pyramid += " ";
      } else {
        pyramid += "#";
      }
    }
    console.log(pyramid);
  }
}

function pyramid(n, row = 0, level = "") {
  // Recursive solution
  if (n === row) {
    return n;
  }
  if (level.length === 2 * n - 1) {
    console.log(level);
    return pyramid(n, row + 1);
  }
  const midpoint = Math.floor((2 * n - 1) / 2);
  let add;
  if (midpoint - row <= level.length && midpoint + row >= level.length) {
    add = "#";
  } else {
    add = " ";
  }
  return pyramid(n, row, level + add);
}

module.exports = pyramid;
