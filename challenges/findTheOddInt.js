// CHALLENGE => Find the Odd Integer
/* Given an array of integers, find the one that appears an odd number of times.

There will always be only one integer that appears an odd number of times.

Examples
[7] should return 7, because it occurs 1 time (which is odd).
[0] should return 0, because it occurs 1 time (which is odd).
[1,1,2] should return 2, because it occurs 1 time (which is odd).
[0,1,0,1,0] should return 0, because it occurs 3 times (which is odd).
[1,2,2,3,3,3,4,3,3,3,2,2,1] should return 4, because it appears 1 time (which is odd). */

// METHOD 1 => Status Quo
const findOdd = array => {
    let counter = {}
    array.forEach( number => {
        counter[ number ]
        ? counter[ number ] += 1
        : counter[ number ] = 1
    })

    for ( let [ key, value ] of Object.entries( counter )){
        if ( value % 2 !== 0 ) return parseInt( key )
    }

    return 0
}

// METHOD 2
const findOdd2 = array => array.reduce( ( c , v ) => c^v , 0 )

// TESTING
const array1 = [1,2,2,3,3,3,4,3,3,3,2,2,1]
const array2 = [20,1,-1,2,-2,3,3,5,5,1,2,4,20,4,-1,-2,5]
const array3 = [1,1,2,-2,5,2,4,4,-1,-2,5]
const array4 = [20,1,1,2,2,3,3,5,5,4,20,4,5]
const array5 = [10]
const array6 = [5,4,3,2,1,5,4,3,2,10,10]
const array7 = [1,1,1,1,1,1,10,1,1,1,1]

console.log( findOdd(array1) === 4 )
console.log( findOdd(array2) === 5 )
console.log( findOdd(array3) === -1 )
console.log( findOdd(array4) === 5 )
console.log( findOdd(array5) === 10 )
console.log( findOdd(array6) === 1 )
console.log( findOdd(array7) === 10 )