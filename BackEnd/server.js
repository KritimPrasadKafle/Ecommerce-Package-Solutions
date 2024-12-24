//Importing necessary dependencies
const express = require('express');
const app = express();
const cors = require('cors');
const { orderRouter } = require('./routes/order');

require('dotenv').config();

//Middleware setup
app.use(express.json());
app.use(cors());

//setting up the routes
app.use('/api/v1', orderRouter);

const PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
