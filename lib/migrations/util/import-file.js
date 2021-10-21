const isModuleType = require('./is-module-type');
const url = require('url');

/**
 * imports 'mjs', else requires.
 * NOTE: require me late!
 * @param {string} filepath
 * @todo WARN on version 10 and '--experimental-modules' and '--esm'
 */
module.exports = async function importFile(filepath) {
  return (await isModuleType(filepath))
    ? require(url.pathToFileURL(filepath))
    : require(filepath);
};
