// Assignment code here
var generatePassword = function() {

  //Define possible input into specific arrays
  var upperChars = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];

  var lowerChars = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];

  var specialChars = ["!","@","#","$","%","^","&","*","(",")"];

  var numChars = ["0","1","2","3","4","5","6","7","8","9"];

  var options = ['Y','N'];

  var selectedChars = [];

  var userChoiceGreeting = alert("Welcome! Please select which criteria to include in the password!");

  //setting password length
  var userChoiceLength = prompt("Please enter the length of password you wish to create. (between 8 - 128)")

  //error messages for inappropriate user input
  if (!userChoiceLength) {
    return;
  } else if (userChoiceLength < 8) {
    alert("The password length you entered is too short!");
    return;
  } else if (userChoiceLength > 128) {
    alert("The password length you entered is too long!");
    return;
  } else if (Number.isNaN(userChoiceLength)) {alert("The input must be a number!");
    return;}
  
  //setting passwordGen as an empty array for selected array to be stored in 
  var passwordGen = [];

  //asking user if they want to include uppercase characters
  var userChoiceUpperChars = prompt("Would you like to include uppercase characters? Y/N")
  if (userChoiceUpperChars.toUpperCase() === "Y") { 
    selectedChars = selectedChars.concat(upperChars); 
    passwordGen.push(getRandomChar(upperChars));
  }

  //asking user if they want to include lowercase characters
  var userChoiceLowerChars = prompt("Would you like to include lowercase characters? Y/N")
  if (userChoiceLowerChars.toUpperCase() === "Y") {
    selectedChars = selectedChars.concat(lowerChars);
    passwordGen.push(getRandomChar(lowerChars));

  }

  //asking user if they want to include special characters
  var userChoiceSpecialChars = prompt("Would you like to include special characters? Y/N")
  if (userChoiceSpecialChars.toUpperCase() === "Y") {
    selectedChars = selectedChars.concat(specialChars);
    passwordGen.push(getRandomChar(specialChars));

  }

  //asking user if they want to include numbers
  var userChoiceNumChars = prompt("would you like to include numbers? Y/N")
  if (userChoiceNumChars.toUpperCase() === "Y") {
    selectedChars = selectedChars.concat(numChars);
    passwordGen.push(getRandomChar(numChars));

  }

  //error message if user doesn't select anything 
  if ((userChoiceUpperChars.toUpperCase() !== "Y") && (userChoiceLowerChars.toUpperCase() !== "Y") && (userChoiceSpecialChars.toUpperCase() !== "Y") && (userChoiceNumChars.toUpperCase() !== "Y")) {
    alert("You must select something. I can't generate password out of thin air!");
    return;
  }

  var remaining = userChoiceLength - passwordGen.length;

  //generate password 
    for (var i=0; i< remaining; i++) {
         passwordGen.push(getRandomChar(selectedChars));
    }
    return passwordGen.join("");
  }

  function getRandomChar (arr) {
    var passwordIndex = Math.floor(Math.random() * arr.length);
    return arr[passwordIndex]
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
