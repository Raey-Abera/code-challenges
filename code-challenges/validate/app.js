// You are writing a password validator for a website. You want to discourage users from using their username as part of their password, or vice-versa, because it is insecure. Since it is unreasonable to simply not allow them to have any letters in common, you come up with this rule:
// For any password and username pair, the length of the longest common substring should be less than half the length of the shortest of the two.
// In other words, you won't allow users to have half their password repeated in their username, or half their username repeated in their password.
// Write a function validate(username, password) which returns true if your rule is followed, false otherwise.
// Assume: Both the username and the password may contain uppercase letters, lowercase letters, numbers, spaces, and the following special/punctation characters: !@#$%^&*()_+{}:"<>?[];',.
// The username and password will each be less than 100 characters.

const validate = (username, password) => {
  const halfOfShortestOfTwo = Math.ceil(Math.min(username.length, password.length) / 2);
  for (let i = 0; i <= password.length - halfOfShortestOfTwo; i++) {
    if (username.includes(password.substr(i, halfOfShortestOfTwo))) return false;
  }
  return true;
};

console.log('test1', validate('', ''))// false
console.log('test2', validate('username', 'myname'))// false
console.log('test3', validate('sword', 'password'))// false
console.log('test4', validate('qwertyuiop', 'asdfghjkl'))// true
console.log('test5', validate('MASH', 'M*A*S*H'))// true
console.log('test6', validate('asdfghjkl', 'lkjhgfdsa'))// true