// CHALLENGE
// Write a function that takes an array of numbers (integers for the tests) and a target number.
// Find two different items in the array that, when added together, give the target value.
// The indices of these items should be returned in a tuple like so (index1, index2)

// RESTRICTIONS
// The input will always be valid (numbers will be an array of length 2 or greater, and all of the
// items will be numbers; target will always be the sum of two different items from that array)

// METHOD 1
const twoSum = (array, target) => {
    for (let i = 0; i < array.length; i++){
        let element = array[i]
        let match = array.filter( value => array.indexOf(value) !== i )
                           .find( value => value + element === target )
        if (match){
          return [i, array.indexOf(match)]
        }
      }
}

// METHOD 2
function twoSum2(numbers, target) {
    for (var i = 0; i < numbers.length-1; i++) {
        for (var j = i+1; j < numbers.length; j++) {
            if (numbers[i] + numbers[j] === target) return [i, j];
        }
    }
}

// EQUIVALENT ARRAYS FUNCTION
const equivalentArrays = (a, b) => {
    if ( a === b ) return true
    if ( a == null || b == null ) return false
    if ( a.length !== b.length ) return false

    for ( let i = 0; i < a.length; i++ ){
        if ( a.sort()[i] !== b.sort()[i]) return false
    }
    return true
}

// TESTS
const array1 = [1,2,3]
const solution1 = [0,2]
const array2 = [1234, 5678, 9012]
const solution2 = [1, 2]
const array3 = [2, 2, 3]
const solution3 = [0, 1]
console.log( equivalentArrays( twoSum( array1, 4), solution1))
console.log( equivalentArrays( twoSum( array2, 14690), solution2))
console.log( equivalentArrays( twoSum( array3, 4), solution3))
console.log( equivalentArrays( twoSum2( array1, 4), solution1))
console.log( equivalentArrays( twoSum2( array2, 14690), solution2))
console.log( equivalentArrays( twoSum2( array3, 4), solution3))