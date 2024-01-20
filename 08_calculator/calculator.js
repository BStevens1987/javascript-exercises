const add = function(num1, num2) {
	let sum1 = num1 + num2;
  return sum1;
};

const subtract = function(num1, num2) {
	let difference = num1 - num2;
  return difference;
};

const sum = function(array) {
	let sum = 0;
  for(number of array) {
    sum += number;
  };
  return sum;
};

const multiply = function(array) {
let product = 1;
for (number of array) {
  product *= number;
};
return product;
};

const power = function(num1, num2) {
let powerAnswer = num1 ** num2;
return powerAnswer;
};

const factorial = function(num) {
let factorialAnswer = 1;
for(let i = 1; i <= num; i++) {
  factorialAnswer = factorialAnswer*i;
}
return factorialAnswer;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
