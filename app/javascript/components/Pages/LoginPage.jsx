import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Login from '../Auth/Login';

const LoginPage = () => {
    const navigate = useNavigate();
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const handleLogin = () => {
        setIsLoggedIn(true);
        navigate('/dashboard');
    };

    return (
        <div className="min-h-screen bg-gray-100 flex items-center justify-center">
            <Login onLogin={handleLogin} />
        </div>
    );
};

export default LoginPage;