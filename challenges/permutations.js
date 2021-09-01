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

// METHOD 2 => using 'from', 'Set', substring, & concat
const permutations2 = string => {
    return ( string.length <= 1)
            ? [ string ]
            : Array.from(new Set(
                string.split('')
                      .map((char, index) => (
                          permutations2( string.substr(0, index) + string.substr(index + 1)).map( p => char + p )
                        ))
                      .reduce(( accumulator, value ) => accumulator.concat(value), [])
            ))}

// Using 'Array.from( new Set (...) )' is enabling the single return statement in the ternary

// Array.from()
// The Array.from() static method creates a new, shallow-copied Array instance
// from an array-like or iterable object.
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/from

// Set
// The 'Set' object lets you store unique values of any type,
// whether primitive values or object references.
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set

// TESTING
const string_1 = 'a'
const string_2 = 'ab'
const string_3 = 'aabb'

// Method 1
console.log( equivalentArrays( permutations( string_1 ), ['a'] ))
console.log( equivalentArrays( permutations( string_2 ), ['ab', 'ba'] ))
console.log( equivalentArrays( permutations( string_3 ), ['aabb', 'abab', 'abba', 'baab', 'baba', 'bbaa'] ))

// Method 2
console.log( equivalentArrays( permutations2( string_1 ), ['a'] ))
console.log( equivalentArrays( permutations2( string_2 ), ['ab', 'ba'] ))
console.log( equivalentArrays( permutations2( string_3 ), ['aabb', 'abab', 'abba', 'baab', 'baba', 'bbaa'] ))