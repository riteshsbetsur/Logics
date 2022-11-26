//! largest even number from an arry of integers

function max_even(arr) {
  arr.sort((x, y) => y - x);

  for (var i = 0; i < arr.length; i++) {
    if (arr[i] % 2 == 0) return arr[i];
  }
}

console.log(max_even([20, 40, 200]));
console.log(max_even([20, 40, 200, 300]));
