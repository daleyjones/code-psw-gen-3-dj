
const generateBtn = document.querySelector("#generate");
const passwordText = document.querySelector("#password");

function writePassword() {
  const password = generatePassword();
  passwordText.value = password;
}
function generatePassword() {
  const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
  const numbers = "0123456789";
  const specialChars = "!@#$%^&*()_+-=[]{}|;':\"<>,.?/";

  let passwordLength = 0;
  let passwordLowercase = false;
  let passwordUppercase = false;
  let passwordNumbers = false;
  let passwordSpecial = false;

  passwordLength = window.prompt("How many characters would you like your password to contain?");
  if (passwordLength < 8 || passwordLength > 128 || isNaN(passwordLength)) {
    window.alert("Password must be between 8 and 128 characters.");
    return;
  }

  passwordLowercase = window.confirm("Click OK to confirm including lowercase characters.");
  passwordUppercase = window.confirm("Click OK to confirm including uppercase characters.");
  passwordNumbers = window.confirm("Click OK to confirm including numeric characters.");
  passwordSpecial = window.confirm("Click OK to confirm including special characters.");

  if (!passwordLowercase && !passwordUppercase && !passwordNumbers && !passwordSpecial) {
    window.alert("You must select at least one character type.");
    return;
  }

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

  let password = "";
  for (let i = 0; i < passwordLength; i++) {
    password += availableChars[Math.floor(Math.random() * availableChars.length)];
  }

  return password;
}

generateBtn.addEventListener("click", writePassword);
