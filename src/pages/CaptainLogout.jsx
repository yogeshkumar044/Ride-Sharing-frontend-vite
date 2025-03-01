import React, { useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const apiUrl = import.meta.env.VITE_BASE_URL;

const CaptainLogout = () => {
    const navigate = useNavigate();

    useEffect(() => {
        const logoutCaptain = async () => {
            try {
                const token = localStorage.getItem('captain-token');
                if (!token) {
                    navigate('/captain-login');
                    return;
                }

                const response = await axios.get(`${apiUrl}/captains/logout`, {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                });

                if (response.status === 200) {
                    console.log('Logout successful:', response);
                    localStorage.removeItem('captain-token');
                    navigate('/captain-login');
                }
            } catch (error) {
                console.error('Logout failed:', error);
                // Optional: Show an error message or handle failure gracefully
            }
        };

        logoutCaptain();
    }, [navigate]);

    return <div>Logging out...</div>;
};

export default CaptainLogout;
