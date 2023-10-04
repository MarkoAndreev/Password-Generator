// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword() {
  // setting the values equal to all the characters needed for randomizing the password
  var uppercaseVal = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var lowercaseVal = "abcdefghijklmnopqrstuvwxyz";
  var numberVal = "0123456789";
  var specialVal = "!@#$%^&*()";

  // setting an empty string for all the top values that will be added to it
  var char = "";

  // setting an empty value for password length
  var passwordLength;

  // setting an empty value for password
  var password = "";

  // setting all the conditions to false
  var upper = false;
  var lower = false;
  var number = false;
  var specialChar = false;

  // declaring the getLength function that will ask the user for a length between 8-128 and it it isnt there will let them know and run the function again
  // otherwise it will set the passwordLength declared above to the length chosen by the user
  var getLength = function () {
    var length = prompt(
      "What would you like the length of your password to be? (between 8-128 characters)"
    );

    if (length < 8 || length > 128) {
      alert("Password must be between 8-128 characters");
      getLength();
    } else {
      passwordLength = length;
    }
  };

  // declaring the getPasswordCriteria function which will ask the user a series of question and if answerd correctly it will set the corresponding value
  // to true and the char to the set of chars that match the criteria and will console log the password for me to see if the randomizer is working properly
  // it then checks if any value is set to true otherwise tells the user that a value has to be selected
  function getPasswordCriteria() {
    if (
      (confirmation = window.confirm(
        "Do you want to include Uppercase Letters?"
      ))
    ) {
      upper = true;
      password += uppercaseVal.charAt(
        Math.floor(Math.random() * uppercaseVal.length)
      );
      char += uppercaseVal;
      console.log(password);
    }
    if (
      (confirmation = window.confirm(
        "Do you want to include Lowercase Letters?"
      ))
    ) {
      lower = true;
      password += lowercaseVal.charAt(
        Math.floor(Math.random() * lowercaseVal.length)
      );
      char += lowercaseVal;
      console.log(password);
    }
    if ((confirmation = window.confirm("Do you want to include Numbers?"))) {
      number = true;
      password += numberVal.charAt(
        Math.floor(Math.random() * numberVal.length)
      );
      char += numberVal;
      console.log(password);
    }
    if (
      (confirmation = window.confirm(
        "Do you want to include Special Characters?"
      ))
    ) {
      specialChar = true;
      password += specialVal.charAt(
        Math.floor(Math.random() * specialVal.length)
      );
      char += specialVal;
      console.log(password);
    }
    if (
      upper == true ||
      lower == true ||
      number == true ||
      specialChar == true
    ) {
      for (let i = password.length; i < passwordLength; i++) {
        password += char.charAt(Math.floor(Math.random() * char.length));
        console.log(password);
      }
    } else {
      alert("A value must be chosen in order to generate password!");
      getPasswordCriteria();
    }
  }

  getLength();

  getPasswordCriteria();

  return password;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);