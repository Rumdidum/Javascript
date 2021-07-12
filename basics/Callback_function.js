// https://en.wikipedia.org/wiki/Callback_(computer_programming)

function calculate(num1, num2, callbackFunction) {
    return callbackFunction(num1, num2);
}

function calcProduct(num1, num2) {
    return num1 * num2;
}
function calcSum(num1, num2) {
    return num1 + num2;
}

console.log(calculate(10, 5, calcProduct));
console.log(calculate(10, 5, calcSum))

// https://developer.mozilla.org/en-US/docs/Glossary/Callback_function

function greeting(name) {
    console.log('Hello ' + name);
}

function processUserInput(callback) {
    var name = "waldi"
    callback(name);
}

processUserInput(greeting);

/*https://www.quora.com/Why-are-callbacks-so-hard-to-understand-in-
Javascript-I-am-trying-to-learn-async-programming-in-React-js-but-
seeing-functions-that-return-a-function-really-blows-my-mind*/

function addItems(a, b, callback){ 
  var c = a+b; 
  callback(c); 
} 
var PrintMsg = function(sum){ 
  console.log('Total sum is ' + sum); 
}; 
addItems(3,4,PrintMsg); 

/*
https://www.javascripttutorial.net/javascript-callback/
*/

let numbers = [1, 2, 4, 7, 3, 5, 6];

function isOddNumber(number) {
    return number % 2;
}
const oddNumbers = numbers.filter(isOddNumber);
console.log(oddNumbers); // [ 1, 7, 3, 5 ]