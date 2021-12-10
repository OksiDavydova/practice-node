const { sum, sub, mult, div } = require("./operations");

const actionHandler = (operation, arrayNumbers) => {
  switch (operation) {
    case "sum":
      sum(operation, arrayNumbers);
      break;
    case "sub":
      sub(operation, arrayNumbers);
      break;
    case "mult":
      mult(operation, arrayNumbers);
      break;
    case "div":
      div(operation, arrayNumbers);
      break;

    default:
      console.log("unknown operation type");
      break;
  }
};
module.exports = actionHandler;
