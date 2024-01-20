const findTheOldest = function(array) {
  return array.reduce((a, b) => {
    if (a.yearOfDeath === undefined) {
      a.yearOfDeath = new Date().getFullYear();
    }
    else if (b.yearOfDeath === undefined) {
      b.yearOfDeath = new Date().getFullYear();
    };
    if (a.yearOfDeath - a.yearOfBirth > b.yearOfDeath - b.yearOfBirth) {
      return a;
    }
    else if (a.yearOfDeath - a.yearOfBirth < b.yearOfDeath - b.yearOfBirth) {
      return b;
    };
  });
};

// Do not edit below this line
module.exports = findTheOldest;
