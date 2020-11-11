// Given a list of digits, return the smallest number that could be formed from these digits, using the digits only once (ignore duplicates).
function minValue(values){
    let result = ''
    //create object with no repeats, sort it, add each value to result , parse and return
    values = new Set(values.sort(( a, b ) => a - b )).forEach( value => result += value )
    return parseInt(result)
  }

  console.log(minValue([1, 3, 1]))// 13;
  console.log(minValue([4, 7, 5, 7]))// 457;
  console.log(minValue([4, 8, 1, 4]))// 148;
  console.log(minValue([5, 7, 9, 5, 7]))// 579;
  console.log(minValue([6, 7, 8, 7, 6, 6]))// 678;
  console.log(minValue([5, 6, 9, 9, 7, 6, 4]))// 45679;
  console.log(minValue([1, 9, 1, 3, 7, 4, 6, 6, 7]))// 134679;
  console.log(minValue([3, 6, 5, 5, 9, 8, 7, 6, 3, 5, 9]))// 356789;
  console.log(minValue([1, 1, 1, 1, 1, 1, 1, 1, 1, 1]))// 1;