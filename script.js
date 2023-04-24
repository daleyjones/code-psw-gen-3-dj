
// Get references to the DOM elements
const generateBtn = document.querySelector("#generate");
const passwordText = document.querySelector("#password");
// Function to generate and write the password
function writePassword() {
  // Generate a password using the generatePassword function
  const password = generatePassword();
  // Set the value of the password text input to the generated password
  passwordText.value = password;
}
// Function to generate a password based on user preferences
function generatePassword() {
  // Define character sets for password generation
  const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
  const numbers = "0123456789";
  const specialChars = "!@#$%^&*()_+-=[]{}|;':\"<>,.?/";
// Initialize variables to store user preferences
  let passwordLength = 0;
  let passwordLowercase = false;
  let passwordUppercase = false;
  let passwordNumbers = false;
  let passwordSpecial = false;
// Prompt user for password length
  passwordLength = window.prompt("How many characters would you like your password to contain?");
  // Validate password length
  if (passwordLength < 8 || passwordLength > 128) {
    window.alert("Password must be between 8 and 128 characters.");
    return;
  }
// Prompt user for character set preferences
  passwordLowercase = window.confirm("Click OK to confirm including lowercase characters.");
  passwordUppercase = window.confirm("Click OK to confirm including uppercase characters.");
  passwordNumbers = window.confirm("Click OK to confirm including numeric characters.");
  passwordSpecial = window.confirm("Click OK to confirm including special characters.");
// Validate that at least one character set is selected
  if (!passwordLowercase && !passwordUppercase && !passwordNumbers && !passwordSpecial) {
    window.alert("You must select at least one character type.");
    return;
  }
// Build an array of available characters based on user preferences
  let availableChars = [];
  if (passwordLowercase) {
    availableChars = availableChars.concat(lowercaseChars.split(""));
  }
  if (passwordUppercase) {
    availableChars = availableChars.concat(uppercaseChars.split(""));
  }
  if (passwordNumbers) {
    availableChars = availableChars.concat(numbers.split(""));
  }
  if (passwordSpecial) {
    availableChars = availableChars.concat(specialChars.split(""));
  }
// Generate a password of the desired length using the available characters
  let password = "";
  for (let i = 0; i < passwordLength; i++) {
    password += availableChars[Math.floor(Math.random() * availableChars.length)];
  }

  return password;
}
// Add an event listener to the generate button to generate and write the password when clicke
generateBtn.addEventListener("click", writePassword);
