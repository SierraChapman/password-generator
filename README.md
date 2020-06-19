# Password Generator

This project implements client-side logic and some of the user interface for a password generator application using JavaScript. The added features include prompting the user to input the desired password length and character types, verifying that the input is valid, and generating a password by randomly selecting characters of the chosen types. 

## Code Snippets

An example of the client-side logic that was implemented for this application is shown below. After all possible characters of the types selected by the user are combined into a single pool, this code snippet randomly draws characters from the pool to generate the password.

```javascript
// Repeat the following a number of times given by the password length:
for (var i = 0; i < passwordLength; i++) {
    // Randomly choose a number between 0 (inclusive) and the password pool length (exclusive)
    nextCharIndex = Math.floor(Math.random() * characterPool.length);

    // Use that number to select the next character to be added to the password
    nextChar = characterPool[nextCharIndex];

    // Append the character to the end of the password
    password += nextChar;
}
```

## Demo

The GIF below demonstrates using the application to generate a password.

![Demonstration of the application in use](demo.gif)

To interact with the application, visit the [deployed link](https://sierrachapman.github.io/password-generator/), or run it on your local machine by entering `git clone https://github.com/SierraChapman/password-generator.git` into your terminal to download the git repository and then opening the `index.html` file in your browser.

## Built with

* [JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
* [HTML](https://developer.mozilla.org/en-US/docs/Web/HTML)
* [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS)

## Deployed Link

* [See Live Site](https://sierrachapman.github.io/password-generator/)

## Authors

* **Sierra Chapman** 
    - [Portfolio Site](#)
    - [Github](https://github.com/SierraChapman)
    - [LinkedIn](https://www.linkedin.com/in/sierra-chapman)

## Acknowledgments

* This project was built upon a nonfunctional user interface provided by Trilogy Education Services, a 2U, Inc.