// Determine if two sorted arrays are equivalent to one another
const equivalentArrays = (a, b) => {
    if ( a === b ) return true
    if ( a == null || b == null ) return false
    if ( a.length !== b.length ) return false

    for ( let i = 0; i < a.length; i++ ){
        if ( a.sort()[i] !== b.sort()[i]) return false
    }
    return true
}