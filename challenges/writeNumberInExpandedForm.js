// CHALLENGE
/* Given a number, return it as a string in Expanded Form. For example:

expandedForm(12); // Should return '10 + 2'
expandedForm(42); // Should return '40 + 2'
expandedForm(70304); // Should return '70000 + 300 + 4'

NOTE: All numbers will be whole numbers greater than 0 */

// METHOD 1
function expandedForm(num) {  
    return String(num).split('').map( ( digit, index, array ) => {
      if ( parseInt(digit) !== 0 ){
        let conversion = digit
        for ( i = 0; i < array.slice(index).length - 1; i ++ ){
          conversion += "0"
        }
        
        return index === 0 ? conversion : " + " + conversion
      }
    }).join('')
}

