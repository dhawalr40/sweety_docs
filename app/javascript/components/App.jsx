// app/javascript/components/App.jsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { isAuthenticated } from '../services/auth';
import Layout from './Layout/Layout';
import PrivateRoute from './Auth/PrivateRoute';
import Home from './Pages/Home';
import LoginPage from './pages/LoginPage';
import Dashboard from './pages/Dashboard';

// Make sure you have a default export
const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Layout><Home /></Layout>} />
                <Route path="/login" element={<LoginPage />} />
                <Route
                    path="/dashboard"
                    element={
                        <PrivateRoute>
                            <Layout>
                                <Dashboard />
                            </Layout>
                        </PrivateRoute>
                    }
                />
            </Routes>
        </Router>
    );
};

export default App;  // This is the key line