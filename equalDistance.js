// CHALLENGE
// Using an array of cardinal directions, determine if moving in each direction an equal distance
// will return you to the same location, or if you will arrive in a new location

// RESTRAINT(S)
// Array must contain exactly 10 elements

// 
// METHOD 1
// 

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

// 
// METHOD 2
// 

// Using a switch statement
function switchReturnToStart( array ){
    let dx = 0
    let dy = 0
    let dt = array.length

    for ( let i = 0; i < array.length; i++ ){
        switch ( array[i] ) {
            case 'n': dy--; break
            case 's': dy++; break
            case 'w': dx--; break
            case 'e': dx++; break
        }
    }

    return dt === 10 && dx === 0 && dy === 0
}


// 
// METHOD 3
// 

// Using a filter
function filterReturnToStart( array ){
    function count(value){
        return array.filter( a => a === value ).length
    }

    return array.length == 10 && count('n') === count('s') && count('w') === count('e')
}

// SAMPLE SETS
const arrayOne = ['n','s','n','s','n','s','n','s','n','s'] // true
const arrayTwo = ['w','e','w','e','w','e','w','e','w','e','w','e'] // false
const arrayThree = ['w'] // false
const arrayFour = ['n','n','n','s','n','s','n','s','n','s'] // false

// TEST CASES
console.log( "Method 1 Tests:" )
console.log( returnToStart( arrayOne ) )
console.log( returnToStart( arrayTwo ) )
console.log( returnToStart( arrayThree ) )
console.log( returnToStart( arrayFour ) )

console.log( "Method 2 Tests:" )
console.log( switchReturnToStart( arrayOne ) )
console.log( switchReturnToStart( arrayTwo ) )
console.log( switchReturnToStart( arrayThree ) )
console.log( switchReturnToStart( arrayFour ) )

console.log( "Method 3 Tests:" )
console.log( filterReturnToStart( arrayOne ) )
console.log( filterReturnToStart( arrayTwo ) )
console.log( filterReturnToStart( arrayThree ) )
console.log( filterReturnToStart( arrayFour ) )
