//write a function that returns the number of vowels used in a string 
//'a', 'e', 'i', 'o', 'u'

const findVowels = str => {
    let count = 0
    const vowelTracker = ['a','e','i','o','u']

    for (let char of str.toLowerCase()) {
        if (vowelTracker.includes(char)) {
            count++
        }
    }
    return count
}

console.log(findVowels('There are eight vowels')) //8


