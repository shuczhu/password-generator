// Assignment code here
var generatePassword = function () {

  //Define possible input into specific arrays
  var upperChars = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

  var lowerChars = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

  var specialChars = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")"];

  var numChars = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

  //greeting
  alert("Welcome! Please select which criteria to include in the password!");

  //setting password length
  var userChoiceLength = prompt("Please enter the length of password you wish to create. (between 8 - 128)")

  //error messages for inappropriate user input
  if (!userChoiceLength) {
    return;
  } else if (userChoiceLength < 8) {
    alert("The password length you entered is too short!");
    return "please try again";
  } else if (userChoiceLength > 128) {
    alert("The password length you entered is too long!");
    return "please try again";
  } else if (Number.isNaN(parseInt(userChoiceLength))) {
    alert("The input must be a number!");
    return "please try again";
  }

  //setting selectedChars as an empty array for selected array to be stored in 
  var selectedChars = [];

  //asking user if they want to include uppercase characters
  var userChoiceUpperChars = confirm("Would you like to include uppercase characters? Y/N")
  if (userChoiceUpperChars === true) {
    selectedChars = selectedChars.concat(upperChars);
  }

  //asking user if they want to include lowercase characters
  var userChoiceLowerChars = confirm("Would you like to include lowercase characters? Y/N")
  if (userChoiceLowerChars === true) {
    selectedChars = selectedChars.concat(lowerChars);
  }

  //asking user if they want to include special characters
  var userChoiceSpecialChars = confirm("Would you like to include special characters? Y/N")
  if (userChoiceSpecialChars === true) {
    selectedChars = selectedChars.concat(specialChars);
  }

  //asking user if they want to include numbers
  var userChoiceNumChars = confirm("would you like to include numbers? Y/N")
  if (userChoiceNumChars === true) {
    selectedChars = selectedChars.concat(numChars);
  }

  //error message if user doesn't select anything 
  if ((userChoiceUpperChars !== true) && (userChoiceLowerChars !== true) && (userChoiceSpecialChars !== true) && (userChoiceNumChars !== true)) {
    alert("You must select something. I can't generate password out of thin air!");
    return;
  }

  //create a random character generator
  function getRandomChar(arr) {
    var passwordIndex = Math.floor(Math.random() * arr.length);
    return arr[passwordIndex]
  }

  //generate password 
  var createPassword = function () {
    passwordGen = [];
    for (var i = 0; i < userChoiceLength; i++) {
      console.log(passwordGen);
      passwordGen.push(getRandomChar(selectedChars));
    };
    return verify();
  }

  //creating a "verify" function to make sure the elements of categories user selected is included in the generated array
  var verify = function () {
    
    //if user selected "Y" on a category, the function verifies elements from such category is indeed included in the password
    function verifyArray(A, B) {
      if (A === true) {
        return passwordGen.some(element => {
          return B.includes(element);
        })
      } else { return true; }
    }

    var upperCharsVer = verifyArray(userChoiceUpperChars, upperChars);
    var lowerCharsVer = verifyArray(userChoiceLowerChars, lowerChars);
    var specialCharsVer = verifyArray(userChoiceSpecialChars, specialChars);
    var numCharsVer = verifyArray(userChoiceNumChars, numChars);

    //re-run createPassword if any categories returns to false, if all categories are verified "true", return passwordGen as a string
    if ((upperCharsVer === true) && (lowerCharsVer === true) && (specialCharsVer === true) && (numCharsVer === true)) {
      return passwordGen.join("");
    } else { return createPassword(); };

  }

return createPassword();

}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
