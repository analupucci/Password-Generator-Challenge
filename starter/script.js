// Array of special characters to be included in password
var specialCharacters = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.'
];

// Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
];

let passwordLength;


// Function to prompt user for password options
function getPasswordOptions() {
  
  let passwordLength = parseInt (prompt("Choose a password length between 10 and 64"))
  // while (length < 10 || length > 64) {
  //   length = parseInt(prompt("Password length must be between 10 and 64 characters. Please enter a valid number."));
  //   };
    console.log(passwordLength);

   let passwordOptionsLowerCase = confirm("Would you like your password to contain Lowercase characters?");
    console.log(passwordOptionsLowerCase);

    let passwordOptionsUpperCase = confirm("Would you like your password to contain Uppercase characters?");
    console.log(passwordOptionsUpperCase);

    let passwordOptionsNumeric = confirm("Would you like your password to contain Numeric characters?");
    console.log(passwordOptionsNumeric);

    let passwordOptionsSpecialCharacter = confirm ("Would you like your password to contain Special characters?");
    console.log(passwordOptionsSpecialCharacter);

    while (!hasLowercase && !hasUppercase && !hasNumeric && !hasSpecial) {
      alert("At least one character type must be selected. Please select at least one.");

  let passwordOptions = {
    length: passwordLength,
    lowerCase: passwordOptionsLowerCase,
    upperCase: passwordOptionsUpperCase,
    numeric: passwordOptionsNumeric,
    special: passwordOptionsSpecialCharacter
    
  }

    return passwordOptions;
  
}
}

// Function for getting a random element from an array
let allCharacters = "";

function getRandom(arr) {

  for (let i=0; i<passwordLength;i++){

    let chosenCharacters = Math.floor(Math.random()*arr.length)

    allCharacters += arr[chosenCharacters]
  }
return allCharacters;

}

// Function to generate password with user input
function generatePassword() {

  let generatedCharacters = [];

  let containCharacter = getPasswordOptions ();

  let passwordRandom = "";


  if (
    
    containCharacter.lowerCase === false &&
    containCharacter.upperCase === false &&
    containCharacter.numeric === false &&
    containCharacter.special === false
  )
  {alert ("Please choose at least one option to continue.")
  
  }

  else{
    if (containCharacter.lowerCase) {
     generatedCharacters = generatedCharacters.concat(lowerCasedCharacters) 
    }

    if (containCharacter.upperCase) {
      generatedCharacters = generatedCharacters.concat(upperCasedCharacters) 
     }

     if (containCharacter.numeric) {
      generatedCharacters = generatedCharacters.concat(numericCharacters) 
     }

     if (containCharacter.special) {
      generatedCharacters = generatedCharacters.concat(specialCharacters) 
     }

     console.log(generatedCharacters);
     passwordRandom = getRandom (generatedCharacters);
  }

  return passwordRandom;

}



// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);