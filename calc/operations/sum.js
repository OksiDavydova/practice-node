const sum = (operation, arrayNumbers) => {
  if (operation === "sum") {
    let result = arrayNumbers.reduce((acc, number) => {
      return acc + number;
    }, 0);
    console.log(result);
    return true;
  }
  return null;
};
module.exports = sum;
