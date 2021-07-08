// CHALLENGE
// Given a string, replace every letter with its position in the alphabet
// If anything in the text isn't a letter, ignore it and don't return it

function alphabetPosition(text) {
    const isLetter = (char) => char.match(/[a-z]/i)
    
    const onlyLetters = text.split('').filter( isLetter )
    const convertedLetters = onlyLetters.map( letter => letter.toLowerCase().charCodeAt(0) - 96 )
  
    return convertedLetters.join(" ");
  }