var generateBtn = document.querySelector("#generate");


function writePassword() {
  function generatePassword(length) {
    var uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
    var numericChars = "0123456789";
    var specialChars = "!@#$%^&*()_+-=[]{}|;':\"<>,.?/";
    var allChars = uppercaseChars + lowercaseChars + numericChars + specialChars;
    var password = "";

    for (var i = 0; i < length; i++) {
      var randomIndex = Math.floor(Math.random() * allChars.length);
      password += allChars[randomIndex];
    }
    return password;
  }

  var passwordLength = 12; 
  var password = generatePassword(passwordLength);
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}


generateBtn.addEventListener("click", writePassword);
