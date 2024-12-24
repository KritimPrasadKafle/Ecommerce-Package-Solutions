import React from 'react'

//displays a list of packages with their details (items, weight, price, courier price).
function PackageList({ packages }) {
  return (
    <div className="package-container">
      <h2>This order has the following packages:</h2>
      {packages.map((pkg, index) => (
        <div key={index} className="package">
          <h3>Package {index + 1}</h3>
          <p>Items - {pkg.items.join(', ')}</p>
          <p>Total weight - {pkg.totalWeight}g</p>
          <p>Total price - ${pkg.totalPrice}</p>
          <p>Courier price - ${pkg.courierPrice}</p>
        </div>
      ))}
    </div>
  )
}

export default PackageList
