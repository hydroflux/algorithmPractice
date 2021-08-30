// CHALLENGE -> Extract the Domain Name from a URL
/* Write a function that when given a URL as a string, parses out just the domain name and returns it as a string. For example:

domainName("http://github.com/carbonfive/raygun") == "github" 
domainName("http://www.zombie-bites.com") == "zombie-bites"
domainName("https://www.cnet.com") == "cnet"
*/

// METHOD 1 => Status Quo
const domainName = url => {
    let protocolIndex = url.indexOf('//') + 2
    if ( url.slice( protocolIndex ).startsWith('www.') ) protocolIndex += 4
    if ( protocolIndex === 1 ) protocolIndex = url.indexOf('www.') + 4
    if ( protocolIndex === 3 ) protocolIndex = 0

    let host = url.slice( protocolIndex )

    return host
      .slice( 0, host.indexOf('.') )
}

// TESTING
const url1 = 'http://github.com/carbonfive/raygun'
const url2 = 'http://google.co.jp'
const url3 = 'http://pvio-br2x0w80tpx.edu/index.php'
const url4 = 'https://www.9am-2hespjyl-f0m2mkpi39ns5y.co.uk/img/'
const url5 = '0syl3aw0a2.de'
const url6 = 'http://www.loxcdy1oano6t13uk0-8qjs-vf.co/archive/'

console.log( domainName( url1 ) === 'github' )
console.log( domainName( url2 ) === 'google' )
console.log( domainName( url3 ) === 'pvio-br2x0w80tpx' )
console.log( domainName( url4 ) === '9am-2hespjyl-f0m2mkpi39ns5y' )
console.log( domainName( url5 ) === '0syl3aw0a2' )
console.log( domainName( url6 ) === 'loxcdy1oano6t13uk0-8qjs-vf' )