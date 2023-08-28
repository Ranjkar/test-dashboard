// src/components/LoginComponent.tsx
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { login, selectIsAuthenticated, selectError } from '../../features/user/userSlice';
import './Login.css'
export const LoginComponent: React.FC = () => {
    const [username, setUsername] = useState( '' );
    const [password, setPassword] = useState( '' );
    const isAuthenticated = useSelector( selectIsAuthenticated );
    const error = useSelector( selectError );
    const dispatch = useDispatch();

    const handleLogin = () => {
        dispatch( login( { username, password } ) );
    };

    if ( isAuthenticated ) {
        return null;
    }

    return (
        <div className='login__container'>
            <div className="login">
                <div className="login__side-card">
                    <div className="login__logo">
                        {/* This is a placeholder logo. Replace with your actual logo. */}
                        <span className="login__logo-icon">🚀</span>
                        <h1>Sample Project</h1>
                    </div>
                    <p>Welcome to our platform!</p>
                    <p>Login to access your dashboard.</p>
                </div>
                <div className="login__form">
                    <input
                        className="login__input"
                        type="text"
                        placeholder="Username"
                        value={username}
                        onChange={( e ) => setUsername( e.target.value )}
                    />
                    <input
                        className="login__input"
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={( e ) => setPassword( e.target.value )}
                    />
                    <button className="login__button" onClick={handleLogin}>
                        Login
                    </button>
                    {error && <div className="login__error">{error}</div>}
                </div>
            </div>
        </div>
    );
};
