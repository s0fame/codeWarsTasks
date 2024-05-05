// Write a function insert_dash(num) / insertDash(num) / InsertDash(int num) that will insert dashes ('-') between each two odd digits in num.
// For example: if num is 454793 the output should be 4547-9-3.

// Note that the number will always be non-negative (>= 0).




function insertDash(num) {
    let arr = num.toString().split('').map(Number);
   for(let i=0;i<arr.length-1;i++){
     if (arr[i]%2!==0 && arr[i+1]%2!==0) {
       arr[i+1] *= -1;
     }
   }
   return arr.join('')
 }