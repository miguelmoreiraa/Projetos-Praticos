function getFlag(flag) {
  const i = process.argv.indexOf(flag) + 1;
  return process.argv[i];
}

module.exports = getFlag;
