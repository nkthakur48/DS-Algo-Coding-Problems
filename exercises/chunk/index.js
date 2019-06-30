// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

function _chunk(array, size) {
  let currentCount = 0;
  let currentChunk = [];
  const resultChunks = [];
  for (let i = 0; i < array.length; i++) {
    if (currentCount !== size) {
      currentChunk.push(array[i]);
      currentCount++;
    } else {
      resultChunks.push(currentChunk);
      currentChunk = [array[i]];
      currentCount = 1;
    }
  }
  if (currentChunk.length > 0) {
    resultChunks.push(currentChunk);
  }
  return resultChunks;
}

function chunk(array, size) {
  const chunked = [];
  for (let element of array) {
    const lastChunk = chunked[chunked.length - 1];

    if (!lastChunk || lastChunk.length === size) {
      chunked.push([element]);
    } else {
      lastChunk.push(element);
    }
  }
  return chunked;
}

function __chunk(array, size) {
  const chunked = [];
  let i = 0;
  while (i < array.length) {
    chunked.push(array.slice(i, i + size));
    i += size;
  }
  return chunked;
}

module.exports = chunk;
