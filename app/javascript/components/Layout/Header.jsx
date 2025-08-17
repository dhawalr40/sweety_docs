import { logout } from '../../services/auth';
import { useNavigate } from 'react-router-dom';

const Header = () => {
    const navigate = useNavigate();

    const handleLogout = () => {
        logout();
        navigate('/login');
    };

    return (
        <header className="bg-white shadow-sm">
            <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
                <h1 className="text-xl font-bold text-gray-800">Glucose Tracker</h1>
                <button
                    onClick={handleLogout}
                    className="text-gray-600 hover:text-gray-900"
                >
                    Logout
                </button>
            </div>
        </header>
    );
};

export default Header;