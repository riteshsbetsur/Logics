let num1 = 676;
let num2 = num1;
let last1 = 0;
let result1 = 0;
while (num1 > 0) {
  last1 = num1 % 10;
  result1 = result1 * 10 + last1;
  num1 = parseInt(num1 / 10);
}
if (result1 == num2) {
  console.log(`The number ${num2} is palindrome`);
} else {
  console.log(`The number ${num2} is not palindrome`);
}

// palindrome of string
let a = "madam";
let out = "";
for (let i = a.length-1; i >= 0; i--) {
    out = out + a[i];
    //   out = out + a.charAt(i);

}
// console.log(out);
if (out == a) {
    console.log(`${a} is palindrome`);
} else {
    console.log(`${a} is not a palindrome`);
}
