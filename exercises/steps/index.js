// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'

function _steps(n) {
  for (let i = 1; i <= n; i++) {
    printStep(n, i);
  }
}
function printStep(totalSteps, step) {
  const printArr = new Array(totalSteps).fill(" ");
  for (let i = 0; i < step; i++) {
    printArr[i] = "#";
  }
  console.log(printArr.join(""));
}

function __steps(n) {
  for (let row = 0; row < n; row++) {
    let stair = "";
    for (let col = 0; col < n; col++) {
      if (col <= row) {
        stair += "#";
      } else {
        stair += " ";
      }
    }
    console.log(stair);
  }
}

function steps(n, row = 0, stair = "") {
  // recursive solution
  if (n === row) {
    return;
  }
  if (stair.length === n) {
    console.log(stair);
    return steps(n, row + 1);
  }
  if (stair.length <= row) {
    stair += "#";
  } else {
    stair += " ";
  }
  return steps(n, row, stair);
}
module.exports = steps;
