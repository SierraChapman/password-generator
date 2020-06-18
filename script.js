// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Define generatePassword function

  // DECLARE VARIABLES

  // password length
  // list of character type objects containing name of character type and all possible characters of that type
  // possible characters to be used in password, initialized to empty string
  // the password, initialized to empty string
  // variables to hold new characters and indices when generating password

  // PROMPT USER FOR PASSWORD CRITERIA

  // Prompt user for length of password and save to password length variable

  // Check for valid password length. While password length is not between 8 and 128 (inclusive)...
    // ...inform user that the input was invalid and prompt again for new password length.

  // While the password's character pool is empty (i.e. no character types have been selected)...
    // Cycle once through the character types. For each character type...
      // ...ask user whether or not to use it.

      // If user wants to use this character type...
        // ...add characters of this type to password's character pool

    // If the password's character pool is empty...
      // ...alert the user that they have to choose at least one character type.

      // The code inside the while loop will be repeated.

  // GENERATE THE PASSWORD

  // Repeat the following a number of times given by the password length:
    // Randomly choose a number between 0 (inclusive) and the password length (exclusive)

    // Use that number to select the next character to be added to the password

    // Append the character to the end of the password

  // Return the completed password