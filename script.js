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
function generatePassword() {

  // DECLARE VARIABLES

  // password length
  var passwordLength;
  // list of character type objects containing name of character type and all possible characters of that type
  var characterTypes = [
    {name: "lowercase", characters: "abcdefghijklmnopqrstuvwxyz"},
    {name: "upercase", characters: "ABCDEFGHIJKLMNOPQRSTUVWXYZ"},
    {name: "numeric", characters: "0123456789"},
    {name: "special", characters: " !\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~"}
  ];
  // possible characters to be used in password, initialized to empty string
  var characterPool = "";
  // the password, initialized to empty string
  var password = "";
  // variables to hold new characters and indices (in characterPool) when generating password
  var nextCharIndex;
  var nextChar;

  // console.log(characterTypes[3].characters) // for checking that escape characters are typed correct

  // PROMPT USER FOR PASSWORD CRITERIA

  // Prompt user for length of password and save to password length variable
  passwordLength = prompt("Enter password length:")

  // Check for valid input type and password length. While password length is not an integer between 8 and 128 (inclusive)...
  while (!isNumeric(passwordLength) || passwordLength < 8 || passwordLength > 128) {
    // ...inform user that the input was invalid and prompt again for new password length.
    passwordLength = prompt("Please enter a whole number that is at least 8 and at most 128.\n\nEnter password length:")
  }

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
    // Randomly choose a number between 0 (inclusive) and the password pool length (exclusive)

    // Use that number to select the next character to be added to the password

    // Append the character to the end of the password

  // Return the completed password

}

// Define function to check if a string consists entirely of numeric characters
function isNumeric(string) {
  return true;
}