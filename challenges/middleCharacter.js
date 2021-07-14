// CHALLENGE
// Given a word, return the middle character of the word
// If the word's length is odd, return the middle character;
// if the word's length is even, return the middle 2 characters

// METHOD 1
function getMiddle(s)
{
  return s.length % 2 == 0
  ? s.slice( s.length/2 - 1 , s.length / 2 + 1)
  : s[Math.floor(s.length/2)]
}

// TESTS
console.log(getMiddle("test") === "es")
console.log(getMiddle("testing") === "t")
console.log(getMiddle("middle") === "dd")
console.log(getMiddle("A") === "A")