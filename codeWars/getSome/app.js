// Given two integers a and b, which can be positive or negative, find the sum of all the numbers between including them too and return it. If the two numbers are equal return a or b.

// Note: a and b are not ordered!

// Examples:
// getSum(1, 0) == 1   // 1 + 0 = 1
// getSum(1, 2) == 3   // 1 + 2 = 3
// getSum(0, 1) == 1   // 0 + 1 = 1
// getSum(1, 1) == 1   // 1 Bc both are same
// getSum(-1, 0) == -1 // -1 + 0 = -1
// getSum(-1, 2) == 2  // -1 + 0 + 1 + 2 = 2

const getSum = (num1, num2) => {
    if (num1 === num2) return num2
    let result = 0;
    let smaller = Math.min(num1, num2)
    const larger = Math.max(num1, num2)
    for (let i = smaller; i <= larger; i++) {
        result += i
    }
    return result
}

console.log(getSum(1, 0))//1
console.log(getSum(1, 2))//3
console.log(getSum(0, 1))//1
console.log(getSum(1, 1))//1   
console.log(getSum(-1, 0))//-1
console.log(getSum(-1, 2))//2  