/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  const arrCopy = arr;
  const filteredArray = arrCopy.filter((elem) => elem !== -1);
  const sortedArray = filteredArray.sort((a, b) => a - b);
  for (let i = 0, j = 0; i < arr.length; i++) {
    if (arrCopy[i] !== -1) {
      arrCopy[i] = sortedArray[j];
      j++;
    }
  }
  return arrCopy;
}

module.exports = sortByHeight;
