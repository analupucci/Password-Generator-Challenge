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

// Function to prompt user for password options
function getPasswordOptions() {
  
  let passwordLength = prompt("Choose a password length between 10 and 64");
    console.log(passwordLength);

   let passwordOptionsLowerCase = confirm("If you would like Lowercase characters, please type 'L': ");
    console.log(passwordOptionsLowerCase);

    let passwordOptionsUpperCase = confirm("If you would like Uppercase characters, please type 'U': ");
    console.log(passwordOptionsUpperCase);

    let passwordOptionsNumeric = confirm("If you would like numeric characters, please type 'N': ");
    console.log(passwordOptionsNumeric);

    let passwordOptionsSpecialCharacter = confirm ("If you would like special characters, please type 'S': ");
    console.log(passwordOptionsSpecialCharacter);

  let passwordOptions = {
    length: passwordLength,
    lowerCase: passwordOptionsLowerCase,
    
  }

    return passwordOptions;
  
}

//getPasswordOptions();

// Function for getting a random element from an array
// function getRandom(arr) {

//   const array1 = ['a', 'b', 'c'];
//   const array2 = ['d', 'e', 'f'];
//   const array3 = array1.concat(array2);

  

// }

// Function to generate password with user input
function generatePassword() {

  let options = getPasswordOptions();
   
  let practicePassword = "";
  //for (let i = 0; i < passwordLength; i++) {
    
 //   practicePassword += "j"
    
  //}

console.log(options);

  return practicePassword;
}

// Get references to the #generate element
let generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);





