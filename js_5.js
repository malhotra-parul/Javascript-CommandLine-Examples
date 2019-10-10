let readlineSync = require('readline-sync');
let lengthOfArray = readlineSync.question("Enter the number of elements you would like to input - ");
let ArrayOne = [];
let ArrayTwo = [];

for(let i=0; i< lengthOfArray; i++){
    let position = i+1;
    ArrayOne[i] = readlineSync.question(`Enter the number at position ${position} for first array- `);
}

console.log(`First array is - `);
console.log(ArrayOne);


for(let i=0; i< lengthOfArray; i++){
    let position = i+1;
    ArrayTwo[i] = readlineSync.question(`Enter the number at position ${position} for first array- `);
}

console.log(`Second array is - `);
console.log(ArrayTwo);


let temp1 = [];
let temp2 = [];

temp1 = ArrayOne.slice();
temp2 = ArrayTwo.slice();

ArrayOne = temp2.slice();
ArrayTwo = temp1.slice();

console.log("New Array one is -");
console.log(ArrayOne);


console.log("New Array two is -");
console.log(ArrayTwo);