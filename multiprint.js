console.log(
  `Print number from 20 to 12 and each number should be printed thrice`
);

for (let i = 20; i >= 12; i--) {
  for (j = 1; j <= 3; j++) {
    console.log(i);
  }
}

console.log("Program to check whether number is armstrong or not");
// Armstrong Number
// let numStr= prompt("Enter a number to check Armstrong")
// let length=numStr.length
// let numArm=parseInt(numStr)
let numStr = "153";
let resultArm = 0;
let length = numStr.length;
let numArm = parseInt(numStr);
while (numArm > 0) {
  resultArm += (numArm % 10) ** length;
  numArm = parseInt(numArm / 10);
}
if (resultArm == parseInt(numStr)) {
  console.log(`${numStr} is a armstrong number`);
} else {
  console.log(`${numStr} is not a armstrong number`);
}

// program to check whether the number is perfect number or not
let numPerfect = 6;
let resPerfect = 0;
for (let i = 0; i < numPerfect; i++) {
  if (numPerfect % i == 0) {
    resPerfect = resPerfect + i;
  }
}
console.log(resPerfect);
if (resPerfect == numPerfect) {
  console.log("it is perfect number");
} else {
  console.log("not a perfect number");
}
