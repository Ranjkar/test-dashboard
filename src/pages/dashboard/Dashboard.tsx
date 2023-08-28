import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { logout, selectUser } from '../../features/user/userSlice';
import { useNavigate } from 'react-router-dom';
import './Dashboard.css'
export const DashboardComponent: React.FC = () => {
    const user = useSelector( selectUser );
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleLogout = () => {
        dispatch( logout() );
        navigate( '/login' );
    };
    if ( !user ) {
        return null;
    }

    return (
        <div className="dashboard">
            <header className="dashboard__header">
                <h1>Welcome, {user.name}!</h1>
                <nav>
                    
                    <button className="dashboard__logout" onClick={handleLogout}>
                        Logout
                    </button>
                </nav>
            </header>

            <div className="dashboard__content">
                <aside className="dashboard__sidebar">
                    <h2>Menu</h2>
                    {/* Add more menu items here as needed */}
                </aside>
                <div className="dashboard__info">
                    <div>Email: {user.email}</div>
                    <div>Phone Number: {user.phoneNumber}</div>
                    <div>Address: {user.address}</div>
                </div>
            </div>
        </div>
    );
};
