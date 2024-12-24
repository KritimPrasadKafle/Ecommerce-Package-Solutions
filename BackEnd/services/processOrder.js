const { MAX_PACKAGE_COST } = require('../config/constant');
const { createPackage } = require('../services/createPackage')

//Function to process the order and split itmes into multiple packages if needed
function processOrder(items) {
  let packages = []; // to hold final packages
  let currentPackage = []; // Temporary array to hold current package
  let currentWeight = 0; //total weight for the current package
  let currentPrice = 0; // total price for the current package


  //Iterating over the items
  for (let i = 0; i < items.length; i++) {
    const item = items[i];


    //Adding the item to see whether it exceeds Max_package_cost
    if (currentPrice + item.price > MAX_PACKAGE_COST) {

      packages.push(createPackage(currentPackage));
      currentPackage = [item]; //Reset currentpackage for the next set of items
      currentWeight = item.weight; //Reset weight for the new package
      currentPrice = item.price; //Reset Price for the new package
    } else {

      //Adding the current item to the current package
      currentPackage.push(item);
      currentWeight += item.weight;
      currentPrice += item.price;
    }
  }

  //After the loop, if there are remaining items, create the final package
  if (currentPackage.length > 0) {
    packages.push(createPackage(currentPackage));
  }
  console.log("packages: ", packages);


  return packages;
}

module.exports = { processOrder };