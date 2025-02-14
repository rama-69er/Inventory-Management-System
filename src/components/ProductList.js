import React from 'react';
import '../css/productList.css';

function ProductList({ addToCart }) {
    const products = [
        { id: 1, name: '1', description: 'This is a description of Product 1', price: 9.99 },
        { id: 2, name: '2', description: 'This is a description of Product 2', price: 19.99 },
        { id: 3, name: '3', description: 'This is a description of Product 3', price: 29.99 },
        // Add more products as needed...
    ];

    return (
        <div className='product-list'>
            <h2>Inventory Management System</h2>
            <ul>
                {products.map((product) => (
                    <li key={product.id}>
                        <span>{product.name} &nbsp;&nbsp;&nbsp; </span>
                        <span>{product.description} &nbsp;&nbsp;&nbsp; </span>
                        <span>Price : {product.price} &nbsp;&nbsp;&nbsp;</span>
                        <button onClick={() => addToCart(product)}>Add to Cart</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default ProductList;
