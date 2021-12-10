const div = (operation, arrayNumbers) => {
  if (operation === "div") {
    let result = arrayNumbers.reduce((acc, number) => {
      return acc / number;
    });
    console.log(result);
    return true;
  }
  return null;
};
module.exports = div;
