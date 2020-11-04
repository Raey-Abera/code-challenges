// Simple, given a string of words, return the length of the shortest word(s)
// String will never be empty and you do not need to account for different data types

const findShort = str => Math.min(...str.split(' ').map(str => str.length));

console.log('test1', findShort("bitcoin take over the world maybe who knows perhaps"));// 3
console.log('test2',findShort("turns out random test cases are easier than writing out basic ones"))//3; 
