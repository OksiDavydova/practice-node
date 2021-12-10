console.log("calculator");

//sum +
//sub -
//mult *
//div /

// console.log(process.argv);

console.log(process.argv.slice(2));
const [operation, ...numbers] = process.argv.slice(2);

const arrayNumber = numbers.map((num) => Number(num));

// const sum = (operation, arrayNumber) => {
//   if (operation === "sum") {
//     let result = arrayNumber.reduce((acc, number) => {
//       return acc + number;
//     }, 0);
//     console.log(result);
//     return true;
//   }
//   return null;
// };

// const sub = (operation, arrayNumber) => {
//   if (operation === "sub") {
//     let result = arrayNumber.reduce((acc, number) => {
//       return acc - number;
//     });
//     console.log(result);
//     return true;
//   }
//   return null;
// };

// const mult = (operation, arrayNumber) => {
//   if (operation === "mult") {
//     let result = arrayNumber.reduce((acc, number) => {
//       return acc * number;
//     });
//     console.log(result);
//     return true;
//   }
//   return null;
// };

// const div = (operation, arrayNumber) => {
//   if (operation === "div") {
//     let result = arrayNumber.reduce((acc, number) => {
//       return acc / number;
//     });
//     console.log(result);
//     return true;
//   }
//   return null;
// };

switch (operation) {
  case "sum":
    sum(operation, arrayNumber);
    break;
  case "sub":
    sub(operation, arrayNumber);
    break;
  case "mult":
    mult(operation, arrayNumber);
    break;
  case "div":
    div(operation, arrayNumber);
    break;

  default:
    console.log("unknown operation type");
    break;
}
