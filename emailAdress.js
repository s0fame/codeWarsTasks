// https://www.codewars.com/kata/562d8d4c434582007300004e/train/javascript

obfuscate = function (email) {
  return email.replaceAll("@", " [at] ").replaceAll(".", " [dot] ");
};
