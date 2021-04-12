/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {string[]} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  const result = {};
  domains.forEach((domain) => {
    const domainArray = domain.split('.');
    const domainLevels = [];
    for (let i = domainArray.length - 1; i >= 0; i--) {
      domainLevels.push(`.${domainArray[i]}`);
      const key = domainLevels.join('');
      if (result[key] === undefined) {
        result[key] = 1;
      } else {
        result[key]++;
      }
    }
  });
  return result;
}

module.exports = getDNSStats;
