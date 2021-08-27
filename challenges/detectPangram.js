// CHALLENGE
/* A pangram is a sentence that contains every single letter of the alphabet at least once.

For example, the sentence "The quick brown fox jumps over the lazy dog" is a pangram, because it uses the letters A-Z at least once (case is irrelevant).
Given a string, detect whether or not it is a pangram. Return True if it is, False if not. Ignore numbers and punctuation. */

// METHOD 1 => Status Quo
const isPangram = string => {
    let alphabetObject = {}
    for (i = 65; i <= 90; i++) {
        let letter = String.fromCharCode(i).toLowerCase()
        alphabetObject[letter] = string.toLowerCase()
                                        .split('')
                                        .filter( char => char === letter )
                                        .length
        if ( alphabetObject[letter] < 1 ) return false
    }

    return true
}

// METHOD 2 => simpler alphabet definition, using 'every' & 'includes' with a straight return statement
// *** BEST METHOD ***
const isPangram2 = string => {
    return 'abcdefghijklmnopqrstuvwxyz'
        .split('')
        .every( letter => string.toLowerCase().includes( letter ) )
}

// METHOD 3 => using regex
// *** SIMPLEST METHOD ***
const isPangram3 = string => (string.match(/([a-z])(?!.*\1)/ig) || []).length === 26

// TEST CASES
string1 = 'The quick brown fox jumps over the lazy dog.'
string2 = 'This is not a pangram.'

console.log( isPangram(string1) === true )
console.log( isPangram(string2) === false )
console.log( isPangram2(string1) === true )
console.log( isPangram2(string2) === false )
console.log( isPangram3(string1) === true )
console.log( isPangram3(string2) === false )