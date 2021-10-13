// CHALLENGE
// Complete the solution so that it returns true if the first argument(string) passed in ends with the 2nd argument (also a string)

// METHOD 1
const stringEndsWith = (str, ending) => str.endsWith(ending)

// Not going to add additional methods because this is pretty straightforward, no need to get clever

// TEST CASES
let string_1 = 'abc'
let string_2 = 'xyz'

let ending_1 = 'd'
let ending_2 = 'yz'

// Method 1 Testing
console.log(stringEndsWith(string_1, ending_1) === false)
console.log(stringEndsWith(string_1, ending_1) === false)
console.log(stringEndsWith(string_2, ending_2) === true)