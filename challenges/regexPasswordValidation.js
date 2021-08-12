// CHALLENGE
/* You need to write regex that will validate a password to make sure it meets the following criteria:

At least six characters long
contains a lowercase letter
contains an uppercase letter
contains a number
Valid passwords will only be alphanumeric characters. */

// METHOD 1
function validate(password) {
    //   AT LEAST 6 CHARACTERS LONG
    //   ?!.*[&%$]).{6,}$
    //   CONTAINS A LOWERCASE LETTER
    //   ?=.*[A-Z]
    //   CONTAINS AN UPPERCASE LETTER
    //   ?=.*[a-z]
    //   CONTAINS A NUMBER
    //   ?=.*\d
    //   NO CHARACTER MATCHES A SYMBOL
    //   ?!.*[-!$%^&*()_+|~=`{}\[\]:";'<>?, .\/]
    return /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?!.*[&%$])(?!.*[-!$%^&*()_+|~=`{}\[\]:";'<>?, .\/]).{6,}$/.test(password);
}


// METHOD 2
const validate2 = password => {
    return  /^[A-Za-z0-9]{6,}$/.test(password) &&
            /[A-Z]+/           .test(password) &&
            /[a-z]+/           .test(password) &&
            /[0-9]+/           .test(password)
  }


// TESTS
console.log(validate('djI38D55') === true)
console.log(validate('a2.d412') === false)
console.log(validate('JHD5FJ53') === false)
console.log(validate('!fdjn345') === false)
console.log(validate('jfkdfj3j') === false)
console.log(validate('123') === false)
console.log(validate('abc') === false)
console.log(validate('Password123') === true)
console.log(validate2('djI38D55') === true)
console.log(validate2('a2.d412') === false)
console.log(validate2('JHD5FJ53') === false)
console.log(validate2('!fdjn345') === false)
console.log(validate2('jfkdfj3j') === false)
console.log(validate2('123') === false)
console.log(validate2('abc') === false)
console.log(validate2('Password123') === true)