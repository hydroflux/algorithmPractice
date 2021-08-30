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