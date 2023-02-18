module.exports = function check(str, bracketsConfig) {
  let arrString = [];

  for (let i = 0; i < bracketsConfig.length; i++) {
    arrString.push((bracketsConfig[i][0] + bracketsConfig[i][1]));
  }
  for (let i = 0; i < arrString.length; i++) {
    if (str.includes(arrString[i])) {
      str = str.replace(arrString[i], '');
      i = -1;
    }
  }
  if (str.length === 0) {
    return true
  } else {
    return false
  }
}
