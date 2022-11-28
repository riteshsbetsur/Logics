let n = 7;
let test = true;
for (let i = 2; i < n; i++) {
  if (n % i == 0 && n != 2) {
    test = false;
    break;
  }
}

// using if else
if (test == true) {
  console.log(`The ${n} is prime number`);
} else {
  console.log(`The ${n} is not a prime number`);
}

// using ternary operator
test == true
  ? console.log(`The ${n} is prime number`)
  : console.log(`The ${n} is not a prime number`);
