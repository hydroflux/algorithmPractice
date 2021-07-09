// CHALLENGE
// Write a function that takes in a positive parameter & returns its multiplicative persistance,
// which is the number of times you must multiply the digits until you reach a single digit

function persistence(num) {
    const stringArray = num => num.toString().split('')
    const reducer = ( product, value ) => product * value
    let count = 0
    
    while ( stringArray(num).length > 1){
      num = stringArray(num).reduce( reducer )
      count ++
    }
  
    return count
}

// TESTS
console.log( persistence(39) === 3 )
console.log( persistence(4) === 0 )
console.log( persistence(25) === 2 )
console.log( persistence(999) === 4 )