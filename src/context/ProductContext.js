import React, { createContext, useContext, useState, useEffect } from 'react';
import axios from 'axios';

const ProductContext = createContext();

export function ProductProvider({ children }) {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then(response => setProducts(response.data.slice(0, 10)))
            .catch(error => console.error('Error fetching products:', error));
    }, []);

    const addToCart = (product) => setCart([...cart, product]);
    const removeFromCart = (id) => setCart(cart.filter(item => item.id !== id));
    const deleteProduct = (id) => setProducts(products.filter(product => product.id !== id));
    const editProduct = (id, newTitle) => {
        setProducts(products.map(product => 
            product.id === id ? { ...product, title: newTitle } : product
        ));
    };
    
    const updateProduct = (id, updatedProduct) => {
        setProducts(products.map(product => 
            product.id === id ? { ...product, ...updatedProduct } : product
        ));
    };

    return (
        <ProductContext.Provider value={{ products, cart, addToCart, removeFromCart, deleteProduct, editProduct, updateProduct }}>
            {children}
        </ProductContext.Provider>
    );
}

export function useProductContext() {
    return useContext(ProductContext);
}
