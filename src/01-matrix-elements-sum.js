/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
function getMatrixElementsSum(matrix) {
  for (let i = matrix.length - 1; i >= 0; i--) {
    const actualMatrix = matrix[i];
    for (let j = 0; j < actualMatrix.length; j++) {
      if (actualMatrix[j] === 0) {
        for (let y = matrix.length - 1; y > i; y--) {
          // eslint-disable-next-line no-param-reassign
          matrix[y][j] = 0;
        }
      }
    }
  }
  return matrix.reduce(
    (result, subArray) => result + subArray.reduce(
      (accum, element) => accum + element,
      0,
    ),
    0,
  );
}

module.exports = getMatrixElementsSum;
