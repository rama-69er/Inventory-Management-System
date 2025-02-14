import React from 'react';
import "../css/product.css";

function Product({ product, addToCart }) {
    return (
        <div className="product">
            <h2>{product.name}</h2>
            <p>{product.description}</p>
            <p>Price: ${product.price}</p>
            <button onClick={() => addToCart(product)}>Add to Cart</button>
        </div>
    );
};

export default Product;