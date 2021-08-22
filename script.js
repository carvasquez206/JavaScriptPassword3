// Assignment Code
var generateBtn = document.querySelector("#generate");
var comment = document.getElementById("password");
generateBtn.addEventListener('click', writePassword)

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


function generatePassword() {
  var numbers = confirm("choose a length of at least 8 characters and no more than 128 characters")
  
  var upperCases = confirm("Do you want to include upper case letters")

  var lowerCases = confirm("Do you want to include lower case letters")
  
  var special = confirm("Do you want to use special characters")

}