// CHALLENGE
// Write calculations using functions & get the results

// REQUIREMENTS
// There must be a function for each number from 0 ("zero") to 9 ("nine")
// There must be a function for each of the following mathematical operations: plus, minus, times, dividedBy (divided_by in Ruby and Python)
// Each calculation consist of exactly one operation and two numbers
// The most outer function represents the left operand, the most inner function represents the right operand
// Division should be integer division. For example, this should return 2, not 2.666666...:

// METHOD 1
const zero = operator => operator ? operator(0) : 0
const one = operator => operator ? operator(1) : 1
const two = operator => operator ? operator(2) : 2
const three = operator => operator ? operator(3) : 3
const four = operator => operator ? operator(4) : 4
const five = operator => operator ? operator(5) : 5
const six = operator => operator ? operator(6) : 6
const seven = operator => operator ? operator(7) : 7
const eight = operator => operator ? operator(8) : 8
const nine = operator => operator ? operator(9) : 9

const plus = x => {
    return function(y){
      return x + y
    } 
}

const minus = x => {
    return function(y){
      return y - x
    } 
}

const times = x => {
    return function(y){
      return x * y
    } 
}
  
const dividedBy = x => {
    return function(y){
      return Math.floor(y / x)
    } 
}

// METHOD 2
const n = function(digit) {
    return function(operator) {
      return operator ? operator(digit) : digit
    }
}

const zero2 = n(0)
const one2 = n(1)
const two2 = n(2)
const three2 = n(3)
const four2 = n(4)
const five2 = n(5)
const six2 = n(6)
const seven2 = n(7)
const eight2 = n(8)
const nine2 = n(9)

function plus2(x) { return function(y) { return y + x } }
function minus2(x) { return function(y) { return y - x } }
function times2(x) { return function(y) { return y * x } }
function dividedBy2(x) { return function(y) { return Math.floor(y / x) } }


// TEST CASES
console.log(seven(times(five())) === 35)
console.log(four(plus(nine())) === 13)
console.log(eight(minus(three())) === 5)
console.log(six(dividedBy(two())) === 3)
console.log(two(dividedBy(four())) === 0)
console.log(five(dividedBy(eight())) === 0)
console.log(seven2(times2(five2())) === 35)
console.log(four2(plus2(nine2())) === 13)
console.log(eight2(minus2(three2())) === 5)
console.log(six2(dividedBy2(two2())) === 3)
console.log(two2(dividedBy2(four2())) === 0)
console.log(five2(dividedBy2(eight2())) === 0)