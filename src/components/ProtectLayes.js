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

                const res = await axios.get('http://localhost:4000/api/v1/check-auth', { withCredentials: true });
                // console.log("res: ", res);
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
            navigate('/login');
        }
    }, [loading, isAuthenticated, navigate]);

    if (loading) {
        return <Skeleton />;
    }

    return <>{isAuthenticated && children}</>;
};

export default ProtectLayes;
