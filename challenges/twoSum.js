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

// TESTS
console.log( twoSum([1,2,3], 4) == [0,2])
console.log( twoSum([1234, 5678, 9012], 14690) == [1, 2])
console.log( twoSum([2, 2, 3], 4) == [0, 1])