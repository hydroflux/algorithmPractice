// CHALLENGE
// Given a string, replace every letter with its position in the alphabet
// If anything in the text isn't a letter, ignore it and don't return it

function alphabetPosition(text) {
    const isLetter = (char) => char.match(/[a-z]/i)
    
    const onlyLetters = text.split('').filter( isLetter )
    const convertedLetters = onlyLetters.map( letter => letter.toLowerCase().charCodeAt(0) - 96 )
  
    return convertedLetters.join(" ");
  }


// SAMPLE DATA
string1 = "The sunset sets at twelve o' clock."
result1 = "20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11"

string2 = "The narwhal bacons at midnight."
result2 = "20 8 5 14 1 18 23 8 1 12 2 1 3 15 14 19 1 20 13 9 4 14 9 7 8 20"

// TESTS
console.log( alphabetPosition(string1) === result1)
console.log( alphabetPosition(string2) === result2)
