//! Area of a Circle

function circleArea(radius) {
  let area = Math.PI * (radius * radius);
  console.log(area);
  console.log(Math.round(area * 100) / 100);
}
circleArea(5);
