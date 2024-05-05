// https://www.codewars.com/kata/55ee3ebff71e82a30000006a/train/javascript

function titleToNumber(title) {
  let result = 0;
  for (let i = 0; i < title.length; i++) {
    result = result * 26 + (title.charCodeAt(i) - "A".charCodeAt(0) + 1);
  }
  return result;
}
