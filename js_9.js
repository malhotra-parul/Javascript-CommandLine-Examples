var readlineSync = require('readline-sync');
console.log("Welcome to the menu.");

//User inputs 1 or q.
var menuOption = readlineSync.question("Enter '1' to find the largest number and 'q' to quit.");

do{
    if(menuOption == 'Q'){
        menuOption = menuOption.toLowerCase();
                        } // If user enters 'Q' instead of 'q', he will still be able to quit.

switch(menuOption){
case '1': //checking for even or odd
    var one = Number(readlineSync.question("Input first number- "));
    var two = Number(readlineSync.question("Input second number- "));
    var third = Number(readlineSync.question("Input third number- "));

    if(one > two){
        if(one >  third){
            console.log(`one is the greatest number.`)
        }else{
            console.log(`third is the greatest number.`);
        }
    }else{
        if(two > third){
            console.log(`second is the greatest number.`);
        }else{
            console.log(`third is the greatest number.`);
        }
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