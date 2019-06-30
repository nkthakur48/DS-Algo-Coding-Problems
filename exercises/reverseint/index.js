// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

function _reverseInt(n) {
  let reverse = 0;
  let num = n < 0 ? -n : n;
  while (num > 0) {
    reverse = reverse * 10 + (num % 10);
    num = parseInt(num / 10);
  }
  return n < 0 ? -reverse : reverse;
}

function reverseInt(n) {
  const reverseStr = n
    .toString()
    .split("")
    .reverse()
    .join("");
  return Math.sign(n) * parseInt(reverseStr);
}
module.exports = reverseInt;
