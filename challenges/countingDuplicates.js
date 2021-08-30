// CHALLENGE => Count the Number of Duplicates
/* Write a function that will return the count of distinct case-insensitive alphabetic characters and numeric digits that occur more than once in the input string. The input string can be assumed to contain only alphabets (both uppercase and lowercase) and numeric digits.

Example
"abcde" -> 0 # no characters repeats more than once
"aabbcde" -> 2 # 'a' and 'b'
"aabBcde" -> 2 # 'a' occurs twice and 'b' twice (`b` and `B`)
"indivisibility" -> 1 # 'i' occurs six times
"Indivisibilities" -> 2 # 'i' occurs seven times and 's' occurs twice
"aA11" -> 2 # 'a' and '1'
"ABBA" -> 2 # 'A' and 'B' each occur twice */

// METHOD 1 => Status Quo
const duplicateCount = string => {
    let counter = {}
    for ( i = 0 ; i < string.length ; i++ ){
        char = string[i].toLowerCase()

        counter[ char ]
        ? counter[ char ] += 1
        : counter[ char ] = 1
    }

    return Object.values(counter)
        .filter( char => char > 1 )
        .length
}

// METHOD 2 => Regex
const duplicateCount2 = string => (string.toLowerCase()
                                    .split('')
                                    .sort()
                                    .join('')
                                    .match(/([^])\1+/g) || [])
                                    .length


// TESTS
const string1 = 'aabbcde'
const string2 = 'aabBcde'
const string3 = 'Indivisibilities'
const string4 = 'abcdefghABCDabcABA ?'
const string5 = 'abcdefghijklmnABCDEFGabcdefabcdeABCDabcABA'
const string6 = 'abcdefABCABa'

// Method 1 Tests
console.log( duplicateCount( string1 ) === 2 )
console.log( duplicateCount( string2 ) === 2 )
console.log( duplicateCount( string3 ) === 2 )
console.log( duplicateCount( string4 ) === 4 )
console.log( duplicateCount( string5 ) === 7 )
console.log( duplicateCount( string6 ) === 3 )

// Method 2 Tests
console.log( duplicateCount2( string1 ) === 2 )
console.log( duplicateCount2( string2 ) === 2 )
console.log( duplicateCount2( string3 ) === 2 )
console.log( duplicateCount2( string4 ) === 4 )
console.log( duplicateCount2( string5 ) === 7 )
console.log( duplicateCount2( string6 ) === 3 )