const { processOrder } = require('../services/processOrder')

//Order Controller to handle the logic for processing an order
function ordercontroller(req, res) {
  const { selectedItems } = req.body;
  if (!selectedItems || selectedItems.length === 0) {
    return res.status(400).json({ error: 'No items selected for the order.' });
  }

  //Process the order to divide the items into packages
  const packages = processOrder(selectedItems);
  res.json({ packages });
}

module.exports = { ordercontroller };