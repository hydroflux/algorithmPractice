// CHALLENGE => Dashatize It
/* Given a variable n,

If n is an integer, Return a string with dash'-'marks before and after each odd integer, but do not begin or end the string with a dash mark. If n is negative, then the negative sign should be removed.

If n is not an integer, return an empty value.

Ex:

dashatize(274) -> '2-7-4'
dashatize(6815) -> '68-1-5' */

// METHOD 1 => Status Quo
const dashatize = number => {
    if ( isNaN(number) ) return String(number)
  
    let dashedString = String(number)
        .split('')
        .map( int => int % 2 !== 0 ? `-${int}-` : int )
        .join('')
        .replace(/-{2,}/g, "-")

    if ( dashedString[dashedString.length - 1] === '-' ) dashedString = dashedString.substring( 0, dashedString.length - 1 )
    if ( dashedString[0] === '-' ) dashedString = dashedString.substring( 1, dashedString.length )
    return dashedString
}

// METHOD 2 => More Regex
const dashatize2 = number => isNaN( number ) ? 'NaN' : number.toString().match(/([13579]|[02468]+)/g).join('-')

// TESTING
let number1 = 274
let number2 = 5311
let number3 = 86320
let number4 = 974302
let number5 = NaN
let number6 = 0
let number7 = -1
let number8 = -28369

// Method 1 Tests
console.log( dashatize(number1) === '2-7-4' )
console.log( dashatize(number2) === '5-3-1-1' )
console.log( dashatize(number3) === '86-3-20' )
console.log( dashatize(number4) === '9-7-4-3-02' )
console.log( dashatize(number5) === 'NaN' )
console.log( dashatize(number6) === '0' )
console.log( dashatize(number7) === '1' )
console.log( dashatize(number8) === '28-3-6-9' )

// Method 2 Tests
console.log( dashatize2(number1) === '2-7-4' )
console.log( dashatize2(number2) === '5-3-1-1' )
console.log( dashatize2(number3) === '86-3-20' )
console.log( dashatize2(number4) === '9-7-4-3-02' )
console.log( dashatize2(number5) === 'NaN' )
console.log( dashatize2(number6) === '0' )
console.log( dashatize2(number7) === '1' )
console.log( dashatize2(number8) === '28-3-6-9' )