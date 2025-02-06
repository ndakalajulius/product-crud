import React from 'react';
import { useProductContext } from '../context/ProductContext';

function Cart() {
    const { cart, removeFromCart } = useProductContext();
    return (
        <div>
            <h1>Cart</h1>
            {cart.length === 0 ? <p>No items in cart</p> : cart.map(item => (
                <div key={item.id}>
                    <h3>{item.title}</h3>
                    <button onClick={() => removeFromCart(item.id)}>Remove</button>
                </div>
            ))}
        </div>
    );
}

export default Cart;
