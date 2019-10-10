let readlineSync = require('readline-sync');
let lengthOfArray = readlineSync.question("Enter the number of elements you would like to input - ");
let Array = [];

for(let i=0; i< lengthOfArray; i++){
    let position = i+1;
    Array[i] = readlineSync.question(`Enter the number at position ${position} - `);
}

console.log(Array);
let max;
max = Math.max(...Array);
console.log(`The max value is - ${max}`);

