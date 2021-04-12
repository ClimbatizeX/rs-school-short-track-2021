/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  if (str === '') return str;
  const charArray = str.split('');
  let actualChar = charArray[0];
  let count = 0;
  const resultArray = [];
  charArray.forEach((char) => {
    if (char === actualChar) {
      count++;
    } else {
      resultArray.push(`${(count === 1) ? '' : count}${actualChar}`);
      actualChar = char;
      count = 1;
    }
  });
  resultArray.push(`${(count === 1) ? '' : count}${actualChar}`);
  return resultArray.join('');
}

module.exports = encodeLine;
