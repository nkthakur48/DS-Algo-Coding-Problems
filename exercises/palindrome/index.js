// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

function _palindrome(str) {
  const reversed = str.split("").reduce((acc, char) => char + acc, "");
  return reversed === str;
}

function palindrome(str) {
  for (let i = 0; i < parseInt(str.length / 2); i++) {
    let j = str.length - 1 - i;
    if (str[i] !== str[j]) {
      return false;
    }
  }
  return true;
}

module.exports = palindrome;
