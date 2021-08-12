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