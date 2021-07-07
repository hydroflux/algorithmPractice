// CHALLENGE
// Using an array of cardinal directions, determine if moving in each direction an equal distance
// will return you to the same location, or if you will arrive in a new location

// RESTRAINT(S)
// Array must contain exactly 10 elements

// METHOD 1
// Count number of occurrences of a character in an array
function countChar(array, char){
    let count = 0
    for ( let i = 0; i < array.length; ++i ){
        if ( array[i] == char ){
        count ++
        }
    }

    return count
}

// Determine if two elements of an array have the same count in that array
function isEqualCount( array, a, b ){
    return countChar( array, a ) === countChar( array, b )
}

function returnToStart( array ){
    if ( array.length === 10 ){
        if ( isEqualCount( array, "n", "s") && isEqualCount( array, "e", "w" )){
            return true
        }
    }

    return false
}

const arrayOne = ['n','s','n','s','n','s','n','s','n','s'] // true
const arrayTwo = ['w','e','w','e','w','e','w','e','w','e','w','e'] // false
const arrayThree = ['w'] // false
const arrayFour = ['n','n','n','s','n','s','n','s','n','s'] // false

// METHOD 1 TESTS
console.log( returnToStart( arrayOne ) )
console.log( returnToStart( arrayTwo ) )
console.log( returnToStart( arrayThree ) )
console.log( returnToStart( arrayFour ) )
