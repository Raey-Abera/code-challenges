// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character. Make sure the
// the step has spaces on the right-hand side!
// --- Examples
// staircase(2)
// '# '
// '##'
// staircase(3)
// '#  '
// '## '
// '###'
// staircase(4)
// '#   '
// '##  '
// '### '
// '####'

const steps = num => {
    //itterating through rows from 0 to num
    for(let row = 0; row < num; row++){
    let stair = ''

    //itterating through columns from 0 to num
    for(let column = 0; column < num; column ++){
        //if current column is less than or equal to current row, do something 
      if(column <= row){
        stair += '#'
      }else{
        stair += ' '
      }
    }
    console.log(stair)
    }
  }
  console.log(steps(10))