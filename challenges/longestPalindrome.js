// CHALLENGE => Longest Palindrome
/* Find the length of the longest substring in the given string s that is the same in reverse.

As an example, if the input was “I like racecars that go fast”, the substring (racecar) length would be 7.

If the length of the input string is 0, the return value must be 0. */

// METHOD 1
const longestPalindrome = string => {
    if ( string.length === 0 ) return 0
    
    const checkPalindrome = string => {
        let lastIndex = string.length -1
        for ( let i = 0 ; i < lastIndex / 2 ; i++ ){
            let forward = string[ i ]
            let backward = string[ lastIndex - i ]
    
            if ( forward != backward ) return false
        }
        return true
    }

    if ( checkPalindrome(string) === true ) return string.length 

    let palindromeLength = 1
    for ( let i = 0 ; i < string.length ; i++ ){
        for ( let j = i ; j < string.length + 1 ; j++ ){
            let substring = string.slice( i , j )
            if ( substring.length <= palindromeLength ) continue  

            checkPalindrome( substring ) && substring.length > palindromeLength
            ? palindromeLength = substring.length
            : null
        }
    }

    return palindromeLength
}
