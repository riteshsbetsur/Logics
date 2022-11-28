fibNo = 30;
let first = 0;
let second = 1;
let res;
res = first + second;

while (res <= fibNo) {
  first = second;
  second = res;
  console.log(res);
  res = first + second;
}



var n1 = 0,
  n2 = 1,
  next_num3,
  i;
var num3 = 10;
document.write("Fibonacci Series: ");
for (i = 1; i <= num3; i++) {
  console.log(n1); // print the n1
  next_num3 = n1 + n2; // sum of n1 and n2 into the next_num

  n1 = n2; // assign the n2 value into n2
  n2 = next_num3; // assign the next_num into n2
}
console.log(next_num3);