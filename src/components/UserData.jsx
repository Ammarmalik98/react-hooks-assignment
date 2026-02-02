import { useState, useEffect } from 'react';
import './UserData.css';

export default function UserData() {
    const [user, setUser] = useState(1);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const randomId = Math.floor(Math.random() * 10) + 1;

        fetch(`https://jsonplaceholder.typicode.com/users/${randomId}`)
            .then(response => response.json())
            .then(data => {
                // Simulate a slight delay to make the loading state visible
                setTimeout(() => {
                    setUser(data);
                    setLoading(false);
                }, 800);
            })
            .catch(error => {
                console.error('Error fetching user:', error);
                setLoading(false);
            });
    }, []);

    return (
        <div className="card user-card">
            <h2>User Data Fetcher</h2>

            {loading ? (
                <div className="loading-state">
                    <div className="spinner"></div>
                    <p>Loading user data...</p>
                </div>
            ) : user ? (
                <div className="user-info">
                    <div className="avatar-placeholder">
                        {user.name.charAt(0)}
                    </div>
                    <div className="info-row">
                        <span className="label">Name:</span>
                        <span className="value">{user.name}</span>
                    </div>
                    <div className="info-row">
                        <span className="label">Email:</span>
                        <span className="value">{user.email}</span>
                    </div>
                    <div className="info-row">
                        <span className="label">City:</span>
                        <span className="value">{user.address?.city}</span>
                    </div>
                </div>
            ) : (
                <p className="error-message">Failed to load user data.</p>
            )}
        </div>
    );
}
