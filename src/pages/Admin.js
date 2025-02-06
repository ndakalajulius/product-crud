import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Login() {
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleLogin = () => {
        if (password === 'admin123') {
            localStorage.setItem('admin', 'true');
            navigate('/admin');
        } else {
            alert('Wrong password');
        }
    };

    return (
        <div>
            <h1>Login</h1>
            <input type="password" onChange={(e) => setPassword(e.target.value)} />
            <button onClick={handleLogin}>Login</button>
        </div>
    );
}

export default Login;
