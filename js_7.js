let readlineSync = require('readline-sync');
let lengthOfArray = readlineSync.question("Enter the number of elements you would like to input - ");
let meanArray = [];

for(let i=0; i< lengthOfArray; i++){
    let position = i+1;
    meanArray[i] = readlineSync.question(`Enter the number at position ${position} - `);
}

console.log(meanArray);

let sum = 0;
for(let j= 0; j< lengthOfArray; j++){
    sum = sum + Number(meanArray[j]);
}
let mean = sum/lengthOfArray;
console.log(`The mean of the elements from the array is ${mean}`);