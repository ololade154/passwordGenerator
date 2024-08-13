const passwordBox = document.getElementById("password");
const lenght = 12; //the length of the password
const upperCase = "ABCDEFGHIJKLMOPQRSTUVWXYZ"; // letters that will be generated
const lowerCase = "abcdefghijklmnopqrstuvwxyz"; //lowercase of the letters that will be generated
const number = "0123456789"; // the numbers that wiil bw generated
const symbol = "@!#$%&*()?[]{}"; // special characters that will be among the password that will be generated.
const allCharacters = upperCase + lowerCase + number + symbol;

function createPassword() {
  let passWord = "";
  for (let i = 0; i < lenght; i++) {
    passWord += allCharacters.charAt(
      Math.floor(Math.random() * allCharacters.length)
    );
  }
  passwordBox.value = passWord;
}
function copyPassword() {
  passwordBox.select();
  document.execCommand("copy"); // Copies the selected text to the clipboard
}
