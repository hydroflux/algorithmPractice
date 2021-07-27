// CHALLENGE
// Write a function that takes an array of numbers (integers for the tests) and a target number.
// Find two different items in the array that, when added together, give the target value.
// The indices of these items should be returned in a tuple like so (index1, index2)

// RESTRICTIONS
// The input will always be valid (numbers will be an array of length 2 or greater, and all of the
// items will be numbers; target will always be the sum of two different items from that array)

// METHOD 1
const twoSum(array, target){
    for (let i = 0; i < numbers.length; i++){
        let element = numbers[i]
        let match = numbers.filter( value => numbers.indexOf(value) !== i )
                           .find( value => value + element === target )
        if (match){
          return [i, numbers.indexOf(match)]
        }
      }
}