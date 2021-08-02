// CHALLENGE
/* For building the encrypted string:
Take every 2nd char from the string, then the other chars, that are not every 2nd char, and concat them as new String.
Do this n times!

Examples:

"This is a test!", 1 -> "hsi  etTi sats!"
"This is a test!", 2 -> "hsi  etTi sats!" -> "s eT ashi tist!"
Write two methods:

function encrypt(text, n)
function decrypt(encryptedText, n)
For both methods:
If the input-string is null or empty return exactly this value!
If n is <= 0 then return the input text. */


// METHOD 1 - Encryption
function encrypt(text, n) {
    if ( text === null ) return null
  
    const alternatingSplit = (text, arg = 'even') => text.split('').filter( (char, index) => {
      return arg == 'even' ? index % 2 === 0
      : index % 2 !== 0
    }).join('')
    
    for ( i = 0; i < n ; i ++ ){
      text = `${alternatingSplit(text, 'odd')}${alternatingSplit(text,'even')}`
    }
  
    return text
}

function decrypt(encryptedText, n) {
    if ( n <= 0 ) return encryptedText
    
    const midpoint = Math.floor(encryptedText.length / 2)
    const recrypt = text => {
      let newText = ''
      let evens = text.slice(midpoint)
      let odds = text.slice(0, midpoint)
      for ( i = 0 ; i < odds.length ; i++ ){
        newText = `${newText}${evens[i]}${odds[i]}`
      }
      return evens.length > odds.length ? newText += evens[evens.length - 1] : newText
    }
    
    for ( j = 0; j < n ; j ++ ){
      encryptedText = `${recrypt(encryptedText)}`
    }
    
    return encryptedText
  }

// TEST CASES - ENCRYPTION
console.log(encrypt("This is a test!", 0) === "This is a test!");
console.log(encrypt("This is a test!", 1) === "hsi  etTi sats!");
console.log(encrypt("This is a test!", 2) === "s eT ashi tist!");
console.log(encrypt("This is a test!", 3) === " Tah itse sits!");
console.log(encrypt("This is a test!", 4) === "This is a test!");
console.log(encrypt("This is a test!", -1) === "This is a test!");
console.log(encrypt("This kata is very interesting!", 1) === "hskt svr neetn!Ti aai eyitrsig");

// TEST CASES - DECRYPTION
console.log(decrypt("This is a test!", 0) === "This is a test!");
console.log(decrypt("hsi  etTi sats!", 1) === "This is a test!");
console.log(decrypt("s eT ashi tist!", 2) === "This is a test!");
console.log(decrypt(" Tah itse sits!", 3) === "This is a test!");
console.log(decrypt("This is a test!", 4) === "This is a test!");
console.log(decrypt("This is a test!", -1) === "This is a test!");
console.log(decrypt("hskt svr neetn!Ti aai eyitrsig", 1) === "This kata is very interesting!");