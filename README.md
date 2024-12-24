ECOMMERCE-PACKAGE-SOLUTION
An ecommerce package solution is a full-stack application built using React and Node.js that allows users to place orders for products and divides those orders into packages based on specific rules.

Technology Stack
Frontend:
React(Functional Components, Hooks)

Backend:
Node.js (Express Framework)
REST API

Database:
Static data used for demonstration

PROJECT STRUCTURE

root
├── BackEnd
│ ├── config
│ │ └── constant.js
│ ├── services
│ │ └── calculateCourierPrice.js
│ │ └── createPackage.js
│ │ └── processOrder.js
│ ├── routes
│ │ └── order.js
│ ├── controllers
│ │ └── ordercontroller.js
│ └── server.js
├── frontend
│ ├── src
│ │ ├── components
│ │ │ └── ErrorMessage.jsx
│ │ │ └── PackageList.jsx
│ │ │ └── ProductList.jsx
│ │ ├── services
│ │ │ └── OrderApi.jsx
│ │ ├── App.jsx
└── README.md

Installation
BackEnd SetUp

1. Navigate to the backend directory:
   cd BackEnd
2. Install dependencies:
   npm install
3. Start the server
   npm run start

The backend server will run on http://localhost:3000.

Frontend Setup

1. Navigate to the frontend directory:
   cd FrontEnd
2. Install dependencies:
   npm install
3. Start the frontend application:
   npm run dev

The frontend will run on http://localhost:5173/.

Usage

1. View Products:

Open the application in your browser (http://localhost:5173/).

A list of products is displayed with checkboxes next to each item.

2. Select Items:

Check the boxes for the items you wish to order.

3. Place Order:

Click the "Place Order" button.

The selected items will be sent to the backend for processing.

4. View Packages:

The application displays the generated packages with details such as:

Items in each package

Total weight of the package

Total price

Courier price

Example Workflow

1. Initial View:

Displays a vertical list of products (e.g., "Item 1 - $10 - 200g").

2. Order Placement:

Select "Item 1", "Item 2", and "Item 3".

Click "Place Order".

3. Result:

Displays the order divided into packages:

Package 1
Items - Item 1, Item 3
Total weight - 510g
Total price - $240
Courier price - $15

Package 2
Items - Item 2
Total weight - 530g
Total price - $160
Courier price - $15
