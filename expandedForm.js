// https://www.codewars.com/kata/5842df8ccbd22792a4000245/train/javascript

function expandedForm(num) {
  num = ("" + num).split("");
  let result = "";
  if (num.length === 1) {
    return num;
  }
  let n1 = `1${"0".repeat(num.length - 1)}`;
  n1 = Number(n1);
  for (i = 0; i < num.length; i++) {
    if (num[i] == 0) {
      n1 /= 10;
    } else {
      result += `${num[i] * n1} + `;
      n1 /= 10;
    }
  }
  return result.slice(0, -3);
}
