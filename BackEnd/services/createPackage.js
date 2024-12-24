const { calculateCourierPrice } = require('./calculateCourierPrice')

//create a package object containing details of the items, total weight, total price , and courier cost.
function createPackage(items) {
  // Calculate the total weight of all items in the package
  const totalWeight = items.reduce((total, item) => total + item.weight, 0);
  // Calculate the total price of all items in the package
  const totalPrice = items.reduce((total, item) => total + item.price, 0);
  // Calculate the courier cost using the calculateCourierPrice function
  const courierPrice = calculateCourierPrice(totalWeight);


  // Get a list of item names for the package

  const itemNames = items.map(item => item.name);

  // Return the package details

  return {
    items: itemNames,
    totalWeight: totalWeight,
    totalPrice: totalPrice,
    courierPrice: courierPrice,
  };
}

module.exports = { createPackage };