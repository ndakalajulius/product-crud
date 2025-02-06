import React, { useState } from 'react';
import { useProductContext } from '../context/ProductContext';

function Admin() {
    const { products, deleteProduct, editProduct, updateProduct } = useProductContext();
    const [editId, setEditId] = useState(null);
    const [newTitle, setNewTitle] = useState('');
    const [newPrice, setNewPrice] = useState('');

    return (
        <div>
            <h1>Admin Dashboard</h1>
            <h2>Manage Products</h2>
            {products.map(product => (
                <div key={product.id}>
                    {editId === product.id ? (
                        <>
                            <input 
                                type="text" 
                                value={newTitle} 
                                placeholder="New Title"
                                onChange={(e) => setNewTitle(e.target.value)} 
                            />
                            <input 
                                type="text" 
                                value={newPrice} 
                                placeholder="New Price"
                                onChange={(e) => setNewPrice(e.target.value)} 
                            />
                            <button onClick={() => { 
                                updateProduct(product.id, { title: newTitle, price: newPrice }); 
                                setEditId(null); 
                            }}>Save</button>
                        </>
                    ) : (
                        <>
                            <h3>{product.title} - ${product.price || 'N/A'}</h3>
                            <button onClick={() => { setEditId(product.id); setNewTitle(product.title); setNewPrice(product.price || ''); }}>Edit</button>
                            <button onClick={() => deleteProduct(product.id)}>Delete</button>
                        </>
                    )}
                </div>
            ))}
        </div>
    );
}

export default Admin;
