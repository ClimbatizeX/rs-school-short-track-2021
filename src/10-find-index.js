/**
 * Given a sorted array, find the index of the element with the given value.
 * Time complexity should be O(logN)
 *
 * @param {Array} array
 * @param {Number} value
 * @return {Number}
 *
 * @example
 * For ([1, 2, 3], 1) should return 0
 * For ([1, 2, 3], 2) should return 1
 *
 */
function findIndex(array, value) {
  let left = 0;
  let right = array.length - 1;
  let middleIndex = left + Math.floor((right - left) / 2);
  while (array[middleIndex] !== value) {
    if (array[middleIndex] < value) {
      left = middleIndex + 1;
    } else {
      right = middleIndex - 1;
    }
    middleIndex = left + Math.floor((right - left) / 2);
  }
  return middleIndex;
}

module.exports = findIndex;
