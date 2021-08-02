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
    const alternatingSplit = (text, arg = 'even') => text.split('').filter( (char, index) => {
      return arg == 'even' ? index % 2 === 0
      : index % 2 !== 0
    }).join('')
    
    for ( i = 0; i < n ; i ++ ){
      text = `${alternatingSplit(text, 'odd')}${alternatingSplit(text,'even')}`
    }
  
    return text
}

// TEST CASES
console.log(encrypt("This is a test!", 0) === "This is a test!");
console.log(encrypt("This is a test!", 1) === "hsi  etTi sats!");
console.log(encrypt("This is a test!", 2) === "s eT ashi tist!");
console.log(encrypt("This is a test!", 3) === " Tah itse sits!");
console.log(encrypt("This is a test!", 4) === "This is a test!");
console.log(encrypt("This is a test!", -1) === "This is a test!");
console.log(encrypt("This kata is very interesting!", 1) === "hskt svr neetn!Ti aai eyitrsig");