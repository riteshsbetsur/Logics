//! Convert object to string

const person = {
  name: "rupali",
  age: 23,
};

const result = JSON.stringify(person);

console.log(result);
console.log(typeof result);


//! Convert object to string 2nd example
function convertToText(obj) {
  //create an array that will later be joined into a string.
  var string = [];

  if (typeof obj == "object" && obj.join == undefined) {
    string.push("{");
    for (prop in obj) {
      string.push(prop, ": ", convertToText(obj[prop]), ",");
    }
    string.push("}");

    //is array
  } else if (typeof obj == "object" && !(obj.join == undefined)) {
    string.push("[");
    for (prop in obj) {
      string.push(convertToText(obj[prop]), ",");
    }
    string.push("]");

    //is function
  } else if (typeof obj == "function") {
    string.push(obj.toString());

    //all other values can be done with JSON.stringify
  } else {
    string.push(JSON.stringify(obj));
  }

  return string.join("");
}

//!for.html 3rd example
// // (A) THE OBJECT
// var theObj = {
//   name : "John Doe",
//   email : "john@doe.com",
//   address : "123 Doe Street"
// };

// // (B) MANUAL FOR LOOP
// var theString = "";
// for (let i in theObj) {
//   S += i + ":" + theObj[i] + ", ";
// }
// S = S.substring(0, S.length -2);

// // name:John Doe, email:john@doe.com, address:123 Doe Street
// console.log(S);
