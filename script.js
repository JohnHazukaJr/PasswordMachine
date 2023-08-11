// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function generatePassword() {
  var passwordLength = prompt("Please Enter Desired Password Length (Between 8 to 128 Characters):");
  if (passwordLength < 8 || passwordLength > 128) {
    alert("PASSWORD LENGTH MUST BE BETWEEN 8 and 128 CHARACTERS");
    return "";
  }

  var includeLowercase = confirm("Include Lowercase Letters?");
  var includeUppercase = confirm("Include Uppercase Characters?");
  var includeNumeric = confirm("Include Numeric Characters?");
  var includeSpecial = confirm("Include Special Characters?");

  if (!includeLowercase && !includeUppercase && !includeNumeric && !includeSpecial) {
    alert("YOU MUST SELECT AT LEAST ONE CHARACTER TYPE.....OR ELSE");
    return "";
  }

  var charset = "";

  if (includeLowercase) {
    charset += "abcdefghijklmnopqrstuvwxyz";
  }

  if (includeUppercase) {
    charset += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  }

  if (includeNumeric) {
    charset += "0123456789";
  }

  if (includeSpecial) {
    charset += "!@#$%^&*+=.}{[]|?><"; 
  }

  var password = "";
  for (var i = 0; i < passwordLength; i++) {
    var randomIndex = Math.floor(Math.random() * charset.length);
    password += charset[randomIndex];
  }

  return password;
}
