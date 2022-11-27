let a = ["r"];
let b = ["u"];
let c = ["ok baby"];

let combineArray = a.concat(b, c);
console.log(combineArray);

let combineWithSpread = [...a, ...b, ...c];
console.log(combineWithSpread);
