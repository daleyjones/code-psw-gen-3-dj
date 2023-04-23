
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

}