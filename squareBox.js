// https://www.codewars.com/kata/58644e8ddf95f81a38001d8d/train/javascript

function box(num) {
  let arr = [];
  for (let i = 0; i < num; i++) {
    if (i === 0 || i === num - 1) {
      arr.push("-".repeat(num));
    } else {
      arr.push("-" + " ".repeat(num - 2) + "-");
    }
  }
  return arr;
}
