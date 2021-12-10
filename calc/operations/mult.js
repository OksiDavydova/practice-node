const mult = (operation, arrayNumbers) => {
  if (operation === "mult") {
    let result = arrayNumbers.reduce((acc, number) => {
      return acc * number;
    });
    console.log(result);
    return true;
  }
  return null;
};
module.exports = mult;
