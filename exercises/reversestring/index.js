// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function _reverse(str) {
  return str
    .split("")
    .reverse()
    .join("");
}

function __reverse(str) {
  let ans = "";
  for (let i = str.length - 1; i >= 0; i--) {
    ans += str[i];
  }
  return ans;
}

function reverse(str) {
  return str.split("").reduce((acc, char) => char + acc, "");
}

module.exports = reverse;
