/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  const array1 = s1.split('');
  const array2 = s2.split('');
  let sum = 0;
  // eslint-disable-next-line no-labels,no-restricted-syntax
  outer:
  for (let i = 0; i < array1.length; i++) {
    for (let j = 0; j < array2.length; j++) {
      if (array1[i] === array2[j]) {
        sum++;
        array2.splice(j, 1);
        // eslint-disable-next-line no-continue,no-labels
        continue outer;
      }
    }
  }
  return sum;
}

module.exports = getCommonCharacterCount;
