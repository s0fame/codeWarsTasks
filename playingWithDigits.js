// https://www.codewars.com/kata/5552101f47fc5178b1000050/train/javascript

function digPow(n, p) {
  let sum = 0;
  let numsArr = ("" + n).split("").map(Number);
  for (let i = 0; i < numsArr.length; i++) {
    sum += numsArr[i] ** (p + i);
  }
  if (sum % n === 0) {
    return sum / n;
  } else return -1;
}
