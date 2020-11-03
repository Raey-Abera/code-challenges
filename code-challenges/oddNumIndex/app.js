// Create a function that takes an array of numbers, and returns the index of the first odd number
// If there are no odd numbers, the function should output -1. Numbers are guaranteed to be non-negative

// const oddNumIndex = numArr => {
//     for (i = 0; i < numArr.length; i++) {
//         if (numArr[i] % 2 !== 0)  return numArr.indexOf(numArr[i]);
//     }
//     return -1
// }

const oddNumIndex = numbers => {
    return numbers.findIndex(num => num % 2 != 0);
  }

console.log('test1', oddNumIndex([2, 4, 6, 8, 10])) //-1
console.log('test1', oddNumIndex([2, 4, 6, 7, 10])) //3
console.log('test2', oddNumIndex([12, 11, 24, 78, 13, 86, 28])) //1
console.log('test4', oddNumIndex([12, 18, 24, 78, 13, 86, 28])) //4


