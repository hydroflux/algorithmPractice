// Write a function that accepts an array of 10 integers (between 0 and 9),
// that returns a string of those numbers in the form of a phone number


// Convert to string, format using slice
function createPhoneNumber( numberArray ){
    const numberString = numberArray.join("")
    return `(${numberString.slice(0,3)}) ${numberString.slice(3,6)}-${numberSting.slice(6,11)}`
}

// Create format, replace placeholders with numbers in array
function formatPhoneNumber( numberArray ){
    let format = `(xxx) xxx-xxxx`

    for ( let i = 0; i < numbers.length; i++ ){
        format = format.replace('x', numberArray[i])
    }

    return format
}

// Using reduce & replace
function reducePhoneNumber( numberArray ){
    return numberArray.reduce( (placeholder, digit) => placeholder.replace("x", digit), "(xxx) xxx-xxxx")
}
