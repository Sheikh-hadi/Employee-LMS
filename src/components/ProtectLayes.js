import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Skeleton } from 'antd';
import { useNavigate } from 'react-router-dom';

const ProtectLayes = ({ children }) => {
    const navigate = useNavigate();
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const checkAuth = async () => {
            try {
                // Make a request to the backend to check if the user is authenticated
                const res = await axios.get('http://localhost:4000/api/v1/check-auth', { withCredentials: true }); 
                console.log("res: ", res);
                setIsAuthenticated(true);
                // console.log("isAuthenticated: ", isAuthenticated);
            } catch (error) {
                setIsAuthenticated(false);
            } finally {
                setLoading(false);
            }
        };

        checkAuth();
    }, [navigate]);

    useEffect(() => {
        if (!loading && !isAuthenticated) {
            navigate('/login'); // Redirect to the login page if not authenticated
        }
    }, [loading, isAuthenticated, navigate]);

    if (loading) {
        return <Skeleton />; // Show a loading indicator while checking auth status
    }

    return <>{isAuthenticated && children}</>; // Render protected content if authenticated
};

export default ProtectLayes;
