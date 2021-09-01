import equivalentArrays from "../usefulFunctions/equivalentArrays.js"

// CHALLENGE => Permutations
/* In this kata you have to create all permutations of an input string and remove duplicates, if present. This means, you have to shuffle all letters from the input in all possible orders.

Examples:

permutations('a'); // ['a']
permutations('ab'); // ['ab', 'ba']
permutations('aabb'); // ['aabb', 'abab', 'abba', 'baab', 'baba', 'bbaa']
The order of the permutations doesn't matter. */

// METHOD 1 => Status Quo
const permutations = string => {
    let characterArray = string.split('')
    let permutationsHash = {}
    let permutationsArray = []

    const permute = ( array, m = [] ) => {
        if ( array.length === 0 ){
            if ( !permutationsHash[ m ] ){
                permutationsHash[ m ] = 1 &&
                permutationsArray.push( m.join('') )
            }
        } else {
            for ( let i = 0 ; i < array.length ; i ++ ){
                let current = array.slice()
                let next = current.splice( i, 1 )
                permute( current.slice() , m.concat(next) )
            }
        }
    }
    
    permute( characterArray )
    return permutationsArray
}

// TESTING
const string_1 = 'a'
const string_2 = 'ab'
const string_3 = 'aabb'

console.log( equivalentArrays( permutations( string_1 ), ['a'] ))
console.log( equivalentArrays( permutations( string_2 ), ['ab', 'ba'] ))
console.log( equivalentArrays( permutations( string_3 ), ['aabb', 'abab', 'abba', 'baab', 'baba', 'bbaa'] ))