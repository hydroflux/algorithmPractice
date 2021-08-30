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

console.log(domainName('http://www.zombie-bites.com'))