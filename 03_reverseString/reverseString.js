const reverseString = function(str) {
  let strAsArray = str.split("");
  let arrayReversed = strAsArray.reverse();
  let reversedWithCommas = arrayReversed.toString();
  let reversed = reversedWithCommas.replace(/,/g, "");
  return reversed;
};

// Do not edit below this line
module.exports = reverseString;
