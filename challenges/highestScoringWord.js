// CHALLENGE
/* Given a string of words, you need to find the highest scoring word.

Each letter of a word scores points according to its position in the alphabet: a = 1, b = 2, c = 3 etc.

You need to return the highest scoring word as a string.

If two words score the same, return the word that appears earliest in the original string.

All letters will be lowercase and all inputs will be valid. */

// METHOD 1
function high(x){
    const wordArray = x.split(' ')
    const valueArray = wordArray.map( word => word.split('') )
    const valueReducer = (acc, letter) => letter.charCodeAt(0) - 96 + acc
    const reduced = valueArray.map( array => array.reduce(valueReducer, 0))
    return wordArray[reduced.indexOf(Math.max(...reduced))]
}