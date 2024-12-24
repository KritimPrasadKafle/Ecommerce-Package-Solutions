import axios from 'axios';

//Sends a Post request to the server with the selected items to place an order.
// Returns the packages from the server's response if successful, or throws an error if the request fails.
export const placeOrder = async (selectedItems) => {
  try {
    const response = await axios.post('http://localhost:3000/api/v1/order', { selectedItems });
    console.log("API response:", response.data.packages);
    return response.data.packages;


  } catch (error) {
    console.error('Error placing the order', error);
    throw error;
  }
};
