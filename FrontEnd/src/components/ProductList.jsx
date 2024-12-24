import React from 'react'

// Renders a list of products with checkboxes for selection.
// Takes a list of products and a callback function (handleChaeckboxChange) for handling checkbox changes.
function ProductList({ products, handleCheckboxChange }) {
  return (

    <div className="checkbox-list">
      {products.map(product => (
        <div key={product.id} className="checkbox-item">
          <input
            type="checkbox"
            onChange={(e) => handleCheckboxChange(e, product)}
          />
          <span>{product.name} - ${product.price} - {product.weight}g</span>
        </div>
      ))}
    </div>
  )
}

export default ProductList;