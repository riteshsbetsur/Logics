//! Palindrome
// let stringName = "AMMA";
// let storingStringName = "";
// for (let i = stringName.length; i >= 0; i--) {
//   storingStringName = storingStringName + stringName.charAt(i);
// }
// console.log(stringName == storingStringName ? "Palindrome" : "It's Not Palindrome");

//!Reverse String ==>same as string palindrome
// let stringName = "SWAMY";
// let storingReverseStringName = "";
// for (let i = stringName.length - 1; i >= 0; i--){
//     storingReverseStringName = storingReverseStringName + stringName.charAt(i);
// }
// console.log(storingReverseStringName);

//!Reverse Number
// let num = 123;
// let lastnum = 0;
// let result = 0;
// while (num > 0) {
//     lastnum = num % 10;
//     result = result * 10 + lastnum;
//     num = parseInt(num / 10);
// }
// console.log(result);

//!Armstrong
// let num = 153;
// let temp = num;
// let sum = 0;
// while (temp > 0) {
//     rem = temp % 10;
//     sum = sum + rem * rem * rem;
//     temp = parseInt(temp/10);
// }
// if (sum == num) {
//         console.log("armstrong")
// } else {
//     console.log("not armstrong")
//     }

//!fibonacci

// let count = Number(prompt("enter the count"));
// let num1 = 0;
// let num2 = 1;

// let temp = 0;

// for (let i = 0; i < count; i++){
//     if (i <= 1) {
//         temp = i;
//     } else {
//         temp = num1 + num2;
//         num1 = num2;
//         num2 = temp;

//     }

//     console.log(temp);
// };

//!Anagram (Spread==>Sort==>Join+=>Ternary Operator)
// let n1 = prompt("enter string1");
// let n2 = prompt("enter string2");
// let a = [...n1].sort().join();
// let b = [...n2].sort().join();
// console.log(a == b ? "Anagram" : "Not Anagram");

//!Sum of Prime
// let sum = 0;
// for (let i = 2; i <= 100; i++){
//     let count = 0;
//     for (let j = 1; j <= i; j++){
//         if (i % j == 0) {
//             count++;

//         }
//     }
//     if (count == 2) {
//         sum += i;
//     }
// }
// console.log(sum);

//!Integer or Decimal
// let n1 = Number(prompt("enter n1"));

//     if (n1 % 1==0){
//         console.log("it is integer")
//     } else {
//         console.log("it is a decimal")
//     }

//!Tables
// let n1 = Number(prompt("enter n1"));
// for (let i = 1; i <= n1; i++){
//     for (let j = 1; j <= 10; j++){
//         console.log(`${i}*${j}=${i*j}`)
//     }
// }

//!Numbers Last Digits are Same
// let n1 = Number(prompt("enter n1"));
// let n2 = Number(prompt("enter n2"));
// let n3 = Number(prompt("enter n3"));

// let a = n1 % 10;
// let b = n2 % 10;
// let c = n3 % 10;

// if (a == b && a == c) {
//     console.log("true")
// } else {
//     console.log("false")
// }

//!Numbers Reverse Order
// for (let i = 10; i >= 1; i--){
//     console.log(i);
//     console.log(i);
//     console.log(i);
// };

//!Factorial Number
// let num = 5;
// let fact = 1;
// for (let i = 1; i <= num; i++){
//     fact = fact * i;
// }
// console.log(fact);

//!Factors
// let num = 6;
// for (let i = 1; i <= num; i++){
//     if (num % i == 0) {
//         console.log(i)
//     }
// }

//!Perfect Number
// let n1 = Number(prompt("enter n1"));
// let temp = 0;
// for (let i = 1; i <= n1/2; i++){
//     if (n1 % i == 0) {
//         temp += i;
//     }
// }
// console.log(temp == n1 ? "Perfect Number" : "Not Perfect Number");

//!Square root Number
//!Method-01
// let n1 = Number(prompt("enter n1"));
// let a = Math.sqrt(n1);
// console.log(a);

// let n1 = Number(prompt("enter n1"));
// let a = n1 ** (1 / 2);
// console.log(a);

//!Method-02

// let arr = [2, 3, 4, 5, 6];
// function square(element) {
//     console.log(element*element)
// }
// arr.forEach(square);

//!Method-03
// let num = parseInt(prompt("enter the number"));
// let i = prompt("enter SQRT or CBRT number");
// if (i == "CBRT") {
//     console.log(parseInt(num=num**1/3))
// } else if (i == "SQRT") {
//     console.log(parseInt(num=num**1/2))
// } else {
//     console.log("invalid number")
// }

//!Cube Number
//!Method-01
// let arr1 = [2, 3, 4, 5, 6];
// function cube(element) {
//   console.log(element * element*element);
// }
// arr1.forEach(cube);

//! cube root
//!Method-02
// let n1 = Number(prompt("enter n1"));
// let a = Math.cbrt(n1);
// console.log(a);

// let n1 = Number(prompt("enter n1"));
// let a = n1 ** (1 / 3);
// console.log(a);

//! call, apply, bind

// let obj1 = {
//   num: 100,
// };

// let obj2 = {
//   num: 200,
// };

// function totalValue(num1, num2) {
//     return this.num + num1 + num2;
// }

// let totalValue1 = totalValue.call(obj1, 100, 200);

// console.log(totalValue1);

//!apply

// let totalValue2 = totalValue.apply(obj1, [100, 200]);
// console.log(totalValue2);

//!bind
// let totalValue3 = totalValue.bind(obj1, 100, 200);
// console.log(totalValue3);

//! map,filter,reduce
// let arr = [1, 2, 3, 4, 5];

// let mapping = arr.map(val => val + 5);
// console.log(mapping);

// let filtering = arr.filter(val=>val> 3);
// console.log(filtering);

// let reducing = arr.reduce((acc, l) => acc + l);
// let reducing = arr.reduce((acc, l) => {
//     return acc + l

// },5);
// console.log(reducing);/

//! today
// let arr = ["sun", "mon", "tues", "wed", "thirs", "fri", "sat"];
// let a = new Date();

// console.log(arr[a.getDay()]);
// console.log(arr[5])

//! reduce method using while loop

// let a = "1234hello";
// let b = parseInt(a);
// let sum = 0;
// while (b > 0) {
//     sum += a % 10;
//     m = parseInt(a / 10);
// }
// console.log(sum);

// let a = [1, 2, 3, 4];
// let sum = 0;
// for (let i = 0; i < a.length; i++){
//     sum = sum + a[i];
// }
// console.log(sum);

//!Dia of circle
// let dia = r => 2 * r;
// console.log(dia(5));

//!Rectangle area

// let length = prompt("enter length");
// let breadth = prompt("enter breadth");
// let dia = (length, breadth) => length * breadth;
// console.log(dia(length, breadth));

//! addition  of two different arrays

// var A = [1, 2, 3, 4],
//   B = [2, 3, 4, 5];
// var sum = [];

// function sumArray(a, b) {
//   if (a != null && b != null && a.length == b.length) {
//     for (var i = 0, len = a.length; i < a.length; i++) {
//       sum.push(a[i] + b[i]);
//     }
//   }

//   return sum;
// }

// console.log(sumArray(A, B));

//! switch case ==> optimized way
//! to
// let a = prompt("enter a alphabets");
// switch (a) {
//   case "a":
//   case "e":
//   case "i":
//   case "o":
//   case "u":
//         console.log("Its a vowel");
//     break;

//     default:
//         console.log("Its a consonant");
//     break;
// }

//!switch condition
//! to print the vowel or consonant

// let a = 10;
//!console.log(a);
// let b = 20;
//! // console.log(b);
// let operation = prompt("enter operation");
// switch ((a, b, operation)) {
//   case "+": {
//     console.log(a + b);
//     break;
//   }
//   case "-": {
//     console.log(a - b);
//     break;
//   }
//   case "*": {
//     console.log(a * b);
//     break;
//   }
//   case "%": {
//     console.log(a % b);
//     break;
//   }
//   case "/": {
//     console.log(a / b);
//     break;
//   }
//   case "**": {
//     console.log(a ** b);
//     break;
//   }
//     default:
//         console.log("Value not found");
//         break;
// }

//! without using in-built function ==> Filtering method
//!Filtering the array values
// let arr = [20, 50, 60, 70];
// let i = 0;
// let result = [];
// for (let i = 0; i < arr.length; i++){
//     if (arr[i] > 20) {
//         result.push(arr[i])
//     }
// }
// console.log(result);

//! without using in-built function ==> Filtering method
//!Mapping the array values
// let arr = [4, 5, 10, 10, 3, 8, 6];
// let i = 0;
// let result = [];
// let addition = function (num) {
//!     // console.log(num + num);
//     return num + 1;
// }

// for (let i = 0; i < arr.length; i++){
//     result.push(addition(arr[i]))
// }
// console.log(result);





//!practice

//!String Palindrome

// let stringName = "HELLO";
// let storingStringName = "";
// for (let i = stringName.length; i >= 0; i--){
//     storingStringName = storingStringName + stringName.charAt(i);
// }
// console.log(stringName == storingStringName?"Palindrome":"Not Palindrome");

//!Reverse string

let stringName = "DODDANAGOUDA";
let storingStringName=""