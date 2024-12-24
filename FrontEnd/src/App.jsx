import React, { useState } from 'react';
import ProductList from './components/ProductList';
import PackageList from './components/PackageList';
import ErrorMessage from './components/ErrorMessage';
import { placeOrder } from './services/OrderApi';
import './style.css';

//Main App component that allows users to select products, place an order, and view packages
const products = [
  { id: 1, name: 'Item 1', price: 50, weight: 200 },
  { id: 2, name: 'Item 2', price: 60, weight: 250 },
  { id: 3, name: 'Item 3', price: 70, weight: 300 },
  { id: 4, name: 'Item 4', price: 40, weight: 400 },
  { id: 5, name: 'Item 5', price: 30, weight: 150 },
  { id: 6, name: 'Item 6', price: 80, weight: 450 },
  { id: 7, name: 'Item 7', price: 90, weight: 600 },
  { id: 8, name: 'Item 8', price: 120, weight: 500 },
  { id: 9, name: 'Item 9', price: 130, weight: 790 },
  { id: 10, name: 'Item 10', price: 20, weight: 100 },
  { id: 11, name: 'Item 11', price: 10, weight: 100 },
  { id: 12, name: 'Item 12', price: 4, weight: 800 },
  { id: 13, name: 'Item 13', price: 5, weight: 200 },
  { id: 14, name: 'Item 14', price: 240, weight: 200 },
  { id: 15, name: 'Item 15', price: 123, weight: 700 },
  { id: 16, name: 'Item 16', price: 245, weight: 10 },
];

const App = () => {
  //states to keep track of own variables
  const [selectedItems, setSelectedItems] = useState([]);
  const [packages, setPackages] = useState([]);
  const [error, setError] = useState('');

  //Handles changes to the product selection checkboxes
  const handleCheckboxChange = (event, product) => {
    if (event.target.checked) {
      setSelectedItems([...selectedItems, product]);
    } else {
      setSelectedItems(selectedItems.filter(item => item.id !== product.id));
    }
  };

  //Handles placing the order by sending selected items to the backend and getting the result
  const handlePlaceOrder = async () => {
    if (selectedItems.length === 0) {
      setError('Please select at least one product.'); // Error message if no products are selected
      return;
    }

    setError('');
    try {
      //Place the order via API call
      const packagesData = await placeOrder(selectedItems);
      setPackages(packagesData);
    } catch (error) {
      setError('There was an error processing your order.');
    }
  };

  return (
    <div className="container">
      <h1>Ecommerce-Package-Solution</h1>
      <div>
        <ProductList products={products} handleCheckboxChange={handleCheckboxChange} />
        <ErrorMessage message={error} />
        <button onClick={handlePlaceOrder}>Place order</button>
      </div>

      {packages.length > 0 && <PackageList packages={packages} />}
    </div>
  );
};

export default App;
