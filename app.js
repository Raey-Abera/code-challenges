//write a function that takes in an array, sorts it, and removes duplcates from the array 

const hasDuplicates = arr => {
    return new Set(arr).size !== arr.length;
}

const merge = (left, right) => { 
    const results = [];
    while(left.length && right.length) {
        if(left[0] < right[0]){
            results.push(left.shift())
        }else {
            results.push(right.shift())
        }
    }
    return [...results, ...left, ...right]
}

const mergeSort = arr => {
    if(arr.length <= 1) return arr;
    const center = Math.floor(arr.length / 2)
    const left = arr.slice(0, center)
    const right = arr.slice(center)
    return merge(mergeSort(left), mergeSort(right))
}

const removeDuplicates = arr => {
    if(!Array.isArray(arr)) return `This is not an array. This is a/an ${typeof arr}`
    if(arr.length === 0) return 'This an empty array'
    if(!hasDuplicates(arr)) return arr;
    const sortedArr = mergeSort(arr.slice())
    const results = []
    for(let i = 0; i < sortedArr.length; i++) {
        if(sortedArr[i + 1] !== sortedArr[i]){
            results.push(sortedArr[i])
        }
    }
    return results
}

console.log('test1', removeDuplicates([-3, 99, 1001, 1001, -3, 56, 27, 27, 27])); // -3, 27, 56, 99, 1001
console.log('test2', removeDuplicates([])); //This an empty array
console.log('test3', removeDuplicates({})) //This is not an array. This is a/an object
console.log('test4', removeDuplicates('')) //This is not an array. This is a/an string
console.log('test5', removeDuplicates(0)) //This is not an array. This is a/an number
