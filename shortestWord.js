// Simple, given a string of words, return the length of the shortest word(s).

// String will never be empty and you do not need to account for different data types.

function findShort(str) {
  // return str.split(' ').sort((a,b)=>a.length-b.length)[0].length;
  const strArr = str.split(" ");
  let res = strArr[0].length;
  for (let i = 0; i < strArr.length; i++) {
    if (strArr[i].length < res) {
      res = strArr[i].length;
    }
  }
  return res;
}
