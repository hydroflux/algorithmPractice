// CHALLENGE
// Write a function that takes in a positive parameter & returns its multiplicative persistance,
// which is the number of times you must multiply the digits until you reach a single digit


// METHOD 1
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

// METHOD 2
const persistence2 = num => {
    return `${num}`.length > 1
        ? 1 + persistence(`${num}`.split('').reduce(( a, b ) => a * +b ))
        : 0
}

// METHOD 3
function persistence3(num) {
  for (var i = 0; num > 9; i++) {
    num = num.toString().split('').reduce((t, c) => c * t);
  }
  return i;
}

// TESTS
console.log( persistence(39) === 3 )
console.log( persistence(4) === 0 )
console.log( persistence(25) === 2 )
console.log( persistence(999) === 4 )
console.log( persistence2(39) === 3 )
console.log( persistence2(4) === 0 )
console.log( persistence2(25) === 2 )
console.log( persistence2(999) === 4 )
console.log( persistence3(39) === 3 )
console.log( persistence3(4) === 0 )
console.log( persistence3(25) === 2 )
console.log( persistence3(999) === 4 )