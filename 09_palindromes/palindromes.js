const palindromes = function (string) {
const strippedString = string.toLowerCase().replace(/[^\w\s]|_/g, "").replace(/ /g, '');
return strippedString === strippedString.split('').reverse().join('');
};


// Do not edit below this line
module.exports = palindromes;
