var readlineSync = require('readline-sync');
console.log("Welcome to the menu.");

//User inputs 1 or q.
var menuOption = readlineSync.question("Enter '1' to check if a number is +ve or -ve and 'q' to quit.");

do{
    if(menuOption == 'Q'){
        menuOption = menuOption.toLowerCase();
                        } // If user enters 'Q' instead of 'q', he will still be able to quit.

switch(menuOption){
case '1': //checking for even or odd
    var inputNumber = readlineSync.question("Input number to check if it's +ve- ");
    if(inputNumber > 0){
        console.log(`${inputNumber} is Positive.`);
    }else if(inputNumber < 0){
        console.log(`${inputNumber} is Negative.`);
    }else{
        console.log("Invalid number.")
    }
    break;
case 'q': //breaking from switch case if user has chosen 'q'
    console.log("Exiting!");
    break;
default: //In case user enters something random.
    console.log("Your input is invalid. Please pick either '1' or 'q'.");
}

if(menuOption == 'q'){ break; } 
//his is needed to  break from the do while loop in case when user has chosen quit.

//rechecking if user wants to try once more or quit here.
var recheckInput = readlineSync.question("Do you wish to continue - Pick 'y' or 'q'.");
//converting to lower case again.
recheckInput = recheckInput.toLowerCase();
}while(recheckInput!='q');