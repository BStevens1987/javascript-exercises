const fibonacci = function(n) {
  if (n < 0) {
    return "OOPS";
  }
  else {
    return Math.floor(((1 + (5)**(1/2))**n - (1 - (5)**(1/2))**n) / (2**n * 5**(1/2)));
  };
};

// Do not edit below this line
module.exports = fibonacci;
