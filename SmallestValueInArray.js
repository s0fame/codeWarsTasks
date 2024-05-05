// Write a function that can return the smallest value of an arr or the index of that value.
// The function's 2nd parameter will tell whether it should return the value or the index.

// Assume the first parameter will always be an arr filled with at least 1 number and no duplicates.
// Assume the second parameter will be a string holding one of two values: 'value' and 'index'.

function min( arr, toReturn ) {
    return toReturn === 'index' ? arr.indexOf(Math.min(...arr)) : Math.min(...arr)
  }