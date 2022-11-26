// ! Two Dimensional Array


function twoDimensionArray(a, b) {
  let arr = [];

  for (let i = 0; i < a; i++) {
    for (let j = 0; j < b; j++) {
      arr[i] = [];
    }
  }

  for (let i = 0; i < a; i++) {
    for (let j = 0; j < b; j++) {
      arr[i][j] = j;
    }
  }
  return arr;
}

const a = 3;
const b = 4;

const result = twoDimensionArray(a, b);
console.log(result);
