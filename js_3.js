let readlineSync = require('readline-sync');
let lengthOfArray = readlineSync.question("Enter the number of elements you would like to input - ");
let Array = [];

for(let i=0; i< lengthOfArray; i++){
    let position = i+1;
    Array[i] = readlineSync.question(`Enter the number at position ${position} - `);
}

console.log(Array);

let sum = 0;
for(let j= 0; j< lengthOfArray; j++){
    sum = sum + Number(Array[j]);
}
console.log(`The sum of the elements from the array is ${sum}`);