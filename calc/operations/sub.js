const sub = (operation, arrayNumbers) => {
  if (operation === "sub") {
    let result = arrayNumbers.reduce((acc, number) => {
      return acc - number;
    });
    console.log(result);
    return true;
  }
  return null;
};
module.exports = sub;
