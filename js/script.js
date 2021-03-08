let year = 0;
let balance = 10000;
let target = balance * 2;
const RATE = 5;

while (balance < target) {
  let interest = (balance * RATE) / 100;
  balance = balance + interest;
  year++;
}
console.log("It will take " + year + " years");

// for(let i = 0; i<= 100; i += 2){
//     console.log(i);
// }
// for(let i = 1; i<= 100; i += 2){
//     console.log(i);
// }
// for (let i = 10; i <= 1000; i++) {
//   if (i % 4 == 0 && i % 6 == 0) {
//     console.log(i);
//   }
// }
let x = 757;
if (x == 2 || x == 3) {
  console.log("YES");
} else if (x == 1) {
  console.log("NO");
} else {
  let y = x - 1;
  let z = x + 1;

  if (y % 6 == 0 || z % 6 == 0) console.log("Yes");
  else console.log("No");
}

// let userInput = prompt("Enter expression");
// const asciiNum = [48, 49, 50, 51, 52, 53, 54, 55, 56, 57];
// const SEPARATOR = "|";
// let typeintA;
// let typeintB;
// let numbs;
// let operand;

// for (let i = 0; i < userInput.length; i++) {
//   if (userInput[i] >= "0" && userInput[i] <= "9") {
//     // while (i < userInput.length && userInput[i] >= "0" && userInput[i] <= "9") {
//     numbs += userInput[i];
//     typeintA += asciiNum[userInput[i]];
//     // }
//     numbs += SEPARATOR;
//     typeintA += SEPARATOR;
//   } else if (
//     userInput[i] == "+" ||
//     userInput[i] == "-" ||
//     userInput[i] == "^"
//   ) {
//     operand += userInput[i] + SEPARATOR;
//   }
// }
// console.log(numbs);
// console.log(operand);
// console.log(typeintA);
