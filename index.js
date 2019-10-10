var readlineSync = require('readline-sync');
var a = Number(readlineSync.question("Enter a: "));
var b = Number(readlineSync.question("Enter b:"));


function sum(a,b){
    return a+b;
}

console.log(sum(a, b));