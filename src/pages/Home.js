import React from 'react';
import { useProductContext } from '../context/ProductContext';

function Home() {
    const { products, addToCart } = useProductContext();
    return (
        <div>
            <h1>Products</h1>
            {products.map(product => (
                <div key={product.id}>
                    <h3>{product.title}</h3>
                    <button onClick={() => addToCart(product)}>Add to Cart</button>
                </div>
            ))}
        </div>
    );
}

export default Home;
