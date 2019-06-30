// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

function _anagrams(stringA, stringB) {
  // Get CharMap
  const charMapA = getCharMap(stringA);
  const charMapB = getCharMap(stringB);

  if (Object.keys(charMapA).length !== Object.keys(charMapB).length) {
    return false;
  }
  for (let charCode in charMapA) {
    if (charMapA[charCode] !== charMapB[charCode]) {
      return false;
    }
  }
  return true;
}

function _getCharMap(str) {
  const charMap = {};
  for (let char of str) {
    const currentCharCode = char.toLowerCase().charCodeAt();
    if (currentCharCode >= 97 && currentCharCode <= 122) {
      // Only conside chars a-z
      charMap[currentCharCode] = charMap[currentCharCode] + 1 || 1;
    }
  }
  return charMap;
}

function getCharMap(str) {
  str = str.replace(/[^\w]/g, "").toLowerCase();
  const charMap = {};
  for (let char of str) {
    charMap[char] = charMap[char] + 1 || 1;
  }
  return charMap;
}
function anagrams(stringA, stringB) {
  // Doesn't use getCharMap
  stringA = stringA.replace(/[^\w]/g, "").toLowerCase();
  stringB = stringB.replace(/[^\w]/g, "").toLowerCase();
  return (
    stringA
      .split("")
      .sort()
      .join() ===
    stringB
      .split("")
      .sort()
      .join()
  );
}
module.exports = anagrams;
