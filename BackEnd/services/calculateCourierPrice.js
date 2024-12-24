//Calculating the courier price based on the weight of a backage
function calculateCourierPrice(weight) {
  if (weight <= 200) {
    return 5;
  } else if (weight <= 500) {
    return 10;
  } else if (weight <= 1000) {
    return 15;
  } else {
    return 20;
  }
}

module.exports = { calculateCourierPrice };