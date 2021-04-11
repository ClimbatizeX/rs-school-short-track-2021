/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  const numbersArray = n
    .toString()
    .split('')
    .map((elem) => Number(elem));
  const min = Math.min.apply(null, numbersArray);
  const minIndex = numbersArray.indexOf(min);
  numbersArray.splice(minIndex, 1);
  const numbersString = numbersArray.join('');
  return Number(numbersString);
}

module.exports = deleteDigit;
