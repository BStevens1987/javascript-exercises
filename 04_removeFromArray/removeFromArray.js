const removeFromArray = function(array, ...trash) {
  const purgedArray = [];
  array.forEach((element) => {
    if (!trash.includes(element)) {
      purgedArray.push(element);
    };
  });
  return purgedArray;
};
// Do not edit below this line
module.exports = removeFromArray;
