import { countChar } from "./usefulFunctions/countChar";

// CHALLENGE
// Using an array of cardinal directions, determine if moving in each direction an equal distance
// will return you to the same location, or if you will arrive in a new location

// RESTRAINT(S)
// Array must contain exactly 10 elements

// METHOD 1
// Determine if two elements of an array have the same count in that array
function isEqualCount( array, a, b ){
    return countChar( array, a ) === countChar( array, b )
}

function returnToStart( array ){
    if ( array.length === 10 ){
        if ( isEqualCount( array, "N", "S") && isEqualCount( array, "E", "W" )){
            return true
        }
    }

    return false
}