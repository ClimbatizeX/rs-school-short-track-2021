/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
function renameFiles(names) {
  const copyNames = names;
  for (let i = copyNames.length - 1; i >= 0; i--) {
    let count = 0;
    for (let j = 0; j < i; j++) {
      if (copyNames[i] === copyNames[j]) {
        if (count > 0) copyNames[j] = `${copyNames[i]}(${count})`;
        count++;
      }
    }
    if (count > 0) copyNames[i] = `${copyNames[i]}(${count})`;
  }
  return copyNames;
}

module.exports = renameFiles;
