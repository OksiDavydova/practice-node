const actionHandler = require("./actionHandler");
const [operation, ...numbers] = process.argv.slice(2);

const arrayNumbers = numbers.map((num) => Number(num));
actionHandler(operation, arrayNumbers);
