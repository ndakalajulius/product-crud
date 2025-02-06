import React from 'react';
import { Link } from 'react-router-dom';
import { useProductContext } from '../context/ProductContext';

function Navbar() {
    const { cart } = useProductContext();
    return (
        <nav>
            <Link to="/">Home</Link>
            <Link to="/cart">Cart ({cart.length})</Link>
            <Link to="/admin">Admin</Link>
        </nav>
    );
}

export default Navbar;
