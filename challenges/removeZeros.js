// CHALLENGE => Remove Zeros
/* Write a function that takes an array of values and moves all elements that are zero to the end of the array, otherwise preserving the order of the array. The zero elements must also maintain the order in which they occurred.

For example, the following array

[7, 2, 3, 0, 4, 6, 0, 0, 13, 0, 78, 0, 0, 19, 14]

is transformed into

[7, 2, 3, 4, 6, 13, 78, 19, 14, 0, 0, 0, 0, 0, 0]

Zero elements are defined by either 0 or "0". Some tests may include elements that are not number literals.

You are NOT allowed to use any temporary arrays or objects. You are also not allowed to use any Array.prototype or Object.prototype methods. */

// METHOD 1 => Status Quo
const removeZeros = array => {
    return array
        .filter( value => parseInt(value) !== 0 )
        .concat( '0'.repeat( array.filter( value => parseInt( value ) === 0 ).length )
                    .split('')
                    .map( value => parseInt( value )))
}

// METHOD 2 => .concat() , .filter(), & .map() are prohibited
const removeZeros2 = array => {
      // Sort "array" so that all elements with the value of zero are moved to the
  // end of the array, while the other elements maintain order.
  // [0, 1, 2, 0, 3] --> [1, 2, 3, 0, 0]
  // Zero elements also maintain order in which they occurred.
  // [0, "0", 1, 2, 3] --> [1, 2, 3, 0, "0"]
  
  // Do not use any temporary arrays or objects. Additionally, you're not able
  // to use any Array or Object prototype methods such as .shift(), .push(), etc
  
  // the correctly sorted array should be returned.

  if (array.length === 0) return array;
  let zeroCount = 0; //keeps track of zeros so we know when to exit for loop
  for (let i = 0, len = array.length; i < len; i++) {
      if (array[i] === 0 || array[i] === '0') { //shuffle numbers back one space and put zero at end
          zeroCount += 1;

          for (let j = i + 1; j < len; j++) {//this looks for non-zero after i of array
              let itemToMoveUp = array[j]; //non-zero number at end to swap places with zero num
              array[j] = array[j-1]; //set index of num we will move up to zero
              array[j-1] = itemToMoveUp; //now the zero has been swapped for a non-zero
          }

          i -= 1; //move index back one because next item is now one index lower
      }
      if (i + 1 + zeroCount >= len){ //if only zeros that were moved are left -> end
          return array;
      }
  }
}


// TESTING
const arraysEqual = ( a , b ) => {
    if ( a === b ) return true
    if ( a == null || b == null ) return false
    if ( a.length !== b.length ) return false

    for ( let i = 0 ; i < a.length ; i ++ ){
        if ( a[i] !== b[i] ) return false
    }

    return true
}

const input = [7, 2, 3, 0, 4, 6, 0, 0, 13, 0, 78, 0, 0, 19, 14]
const solution = [7, 2, 3, 4, 6, 13, 78, 19, 14, 0, 0, 0, 0, 0, 0]
console.log( arraysEqual( removeZeros( input ) , solution ) )
console.log( arraysEqual( removeZeros2( input ) , solution ) )