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
  