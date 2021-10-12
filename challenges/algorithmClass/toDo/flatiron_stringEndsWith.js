// CHALLENGE
/* Complete the solution so that it returns true if the first argument(string)
passed in ends with the 2nd argument (also a string) */

// Method 1 => Status Quo
function stringEndsWith(string, ending){
    return string.endsWith(ending)
}

// Test Cases
let string_1 = 'abc'
let string_2 = 'xyz'

let ending_1 = 'z'
let ending_2 = 'bc'
let ending_3 = 'xyz'
let ending_4 = 'z'

// Method 1 Testing
console.log(stringEndsWith(string_1, ending_1) === false)
console.log(stringEndsWith(string_1, ending_2) === true)
console.log(stringEndsWith(string_2, ending_3) === true)
console.log(stringEndsWith(string_2, ending_4) === true)
