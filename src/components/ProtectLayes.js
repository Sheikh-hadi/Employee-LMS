import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Skeleton } from 'antd';
import { useNavigate } from 'react-router-dom';

const ProtectLayes = ({ children }) => {
    const navigate = useNavigate();
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    console.log("isAuthenticated: ", isAuthenticated)
    const [loading, setLoading] = useState(true);


    useEffect(() => {
        const checkAuth = async () => {
            try {
                // Make a request to the backend to check if the user is authenticated
                await axios.get('/api/auth/check-auth');
                setIsAuthenticated(true);
            } catch (error) {
                setIsAuthenticated(false);
            } finally {
                setLoading(false);
            }
        };
        checkAuth();
    }, []);

    if (loading) {
        return <Skeleton/>; // Show a loading indicator while checking auth status
    }

    if (!isAuthenticated) {
        return navigate('/login'); // Redirect to the login page if not authenticated
    }

    return <>{children}</>; // Render protected content if authenticated
};

export default ProtectLayes;
