let num = 76485;
let result = 0;
let last = 0;
while (num > 0) {
  last = num % 10;
  result = result * 10 + last;
  num = parseInt(num / 10);
}

console.log(`The reverse of number is ${result}`);
