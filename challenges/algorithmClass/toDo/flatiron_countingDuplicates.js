// CHALLENGE => Count the Number of Duplicates
/* Write a function that will:
    1) Return the count of distinct case-insensitive alphabetic characters that occur more than once in the input string
    2) And numeric digits that occur more than once in the input string
    3) The input string can be assumed to contain only alphabets (both uppercase and lowercase) and numeric digits.

Example
"abcde" -> 0 # no characters repeats more than once
"aabbcde" -> 2 # 'a' and 'b'
"aabBcde" -> 2 # 'a' occurs twice and 'b' twice (`b` and `B`)
"indivisibility" -> 1 # 'i' occurs six times
"Indivisibilities" -> 2 # 'i' occurs seven times and 's' occurs twice
"aA11" -> 2 # 'a' and '1'
"ABBA" -> 2 # 'A' and 'B' each occur twice */

// Method 1 => Status Quo
const countNumberDuplicates = (string) => {
    let counter = []
    let firstCount = []
    let duplicates = []
    const splitArray = string.toLowerCase().split('')
    splitArray.map(
        character => {
            if ( firstCount.includes(character) ){
                duplicates.push(character)
            } else {
                firstCount.push(character)
            }
        }
    )

    duplicates.map( duplicate => {
        if ( !counter.includes(duplicate)){
            counter.push(duplicate)
        }
    })

    return counter.length
}

// Method 2 => Using JS Object
const countNumberDuplicates_2 = (string) => {
    let counter = {}
    for ( let i = 0 ; i < string.length ; i ++ ){
        let char = string[i].toLowerCase()

        counter[ char ]
        ? counter[ char ] += 1
        : counter[ char ] = 1
    }

    return Object.values(counter).filter( char => char > 1).length
}

// Test Cases
let string_1 = "aBcde"
let string_2 = "aabbcde"
let string_3 = 'Indivisibilities'
let string_4 = 'abcdefghABCDabcABA ?'
let string_5 = 'abcdefghijklmnABCDEFGabcdefabcdeABCDabcABA'
let string_6 = 'abcdefABCABa'

// Method 1 Testing
console.log(countNumberDuplicates(string_1) === 0)
console.log(countNumberDuplicates(string_2) === 2)
console.log(countNumberDuplicates(string_3) === 2)
console.log(countNumberDuplicates(string_4) === 4)
console.log(countNumberDuplicates(string_5) === 7)
console.log(countNumberDuplicates(string_6) === 3)

// Method 2 Testing
console.log(countNumberDuplicates_2(string_1) === 0)
console.log(countNumberDuplicates_2(string_2) === 2)
console.log(countNumberDuplicates_2(string_3) === 2)
console.log(countNumberDuplicates_2(string_4) === 4)
console.log(countNumberDuplicates_2(string_5) === 7)
console.log(countNumberDuplicates_2(string_6) === 3)