// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function generatePassword() {
  //sets up the variables needed for the generation. this will be done every time the button is pressed.
  var numCharConfirm = false;
  var charTypesConfirm = false;

  var lowerCase = false;
  var upperCase = false;
  var numericals = false;
  var specials = false;

  //while loop so that I can varify and reprompt the user if they give invalid inputs
  while(numCharConfirm == false){ 
    var numChar = prompt("How many characters would you like? only passwords from 8 characters to 128 characters are allowed.")
    if (numChar < 8 || numChar > 128){ //validates that they gave a proper number. if this fails, the program exits the if statement and goes through the while loop again.
      alert("Please give a value that is 8 or more, and 128 or less.")
    }
    else{
      //creates a variable for the array of characters that will be eventually stringed together to form the sting value of the password. it uses the number of characters the user gave for its length.
      var passwordStringArray = new Array[numChar]
      numCharConfirm = true;
    }
  }
  //a while loop to confirm that the user chooses at least one type of character for the password.
  while (charTypesConfirm == false){
    lowerCase = confirm("Press OK if you would like Lowercase characters.");
    upperCase = confirm("Press OK if you would like Uppercase characters.");
    numericals = confirm("Press OK if you would like Numerical characters.");
    specials = confirm("Press OK if you would like Special characters.");
    if (lowerCase == false && upperCase == false && numericals == false && specials == false){ //if this if statement fails, it will alert the user that they did not choose an option and will go back to the while loop.
      alert("please choose at least 1 character type.") 
    }
    else{
      charTypesConfirm = true; //sets the value to true so that the while loop doesn't repeat.
    }
  }


  for (var i = 0; i < numChar; i++){
    passwordStringArray[i] = generateChar(); 
  }
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword());

