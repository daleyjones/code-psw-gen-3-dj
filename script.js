var generateBtn = document.querySelector("#generate");

function generatePassword() {
  const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
  const numbers = "0123456789";
  const specialChars = "!@#$%^&*()_+-=[]{}|;':\"<>,.?/";

  var selectedChars = [];

  var passwordLength = 0;
  var includeLowercase = false;
  var includeUppercase = false;
  var includeNumbers = false;
  var includeSpecial = false;

  passwordLength = window.prompt("How many characters would like your password to contain");

  if (passwordLength < 8 || passwordLength > 128) {
    return;
  }

  includeLowercase = window.confirm("Click OK to confirm including lowercase characters.");
  includeUppercase = window.confirm("Click OK to confirm including uppercase characters.");
  includeNumbers = window.confirm("Click OK to confirm including numeric characters.");
  includeSpecial = window.confirm("Click OK to confirm including special characters.");

  if (!includeLowercase && !includeUppercase && !includeNumbers && !includeSpecial) {
    window.alert("You must select at least one character set.");
    return;
  }

  if (includeLowercase) {
    selectedChars.push(lowercaseChars);
  }
  if (includeUppercase) {
    selectedChars.push(uppercaseChars);
  }
  if (includeNumbers) {
    selectedChars.push(numbers);
  }
  if (includeSpecial) {
    selectedChars.push(specialChars);
  }

  var password = "";
  for (var i = 0; i < passwordLength; i++) {
    var randomCharSetIndex = Math.floor(Math.random() * selectedChars.length);
    var randomCharSet = selectedChars[randomCharSetIndex];
    var randomCharIndex = Math.floor(Math.random() * randomCharSet.length);
    var randomChar = randomCharSet.charAt(randomCharIndex);
    password += randomChar;
  }

  return (password);
}

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

generateBtn.addEventListener("click", writePassword);

