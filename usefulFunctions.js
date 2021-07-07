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
