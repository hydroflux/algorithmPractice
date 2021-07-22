// CHALLENGE
// Complete the solution so that it returns true if the first argument(string) passed in ends with the 2nd argument (also a string)

// METHOD 1
const solution = (str, ending) => str.endsWith(ending)

// Not going to add additional methods because this is pretty straightforward, no need to get clever

// TEST CASES
console.log(solution('abc', 'bc') === true)
console.log(solution('abc', 'd') === false)