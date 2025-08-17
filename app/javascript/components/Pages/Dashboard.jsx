import { useState, useEffect } from 'react';
import api from '../../services/api';
import ReadingsList from '../Readings/ReadingsList';

const Dashboard = () => {
    const [readings, setReadings] = useState([]);
    const [loading, setLoading] = useState(true);

    const fetchReadings = async () => {
        try {
            const response = await api.get('/readings');
            setReadings(response.data || []);
        } catch (error) {
            console.error('Error fetching readings:', error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchReadings();
    }, []);

    if (loading) {
        return <div className="text-center py-10">Loading...</div>;
    }

    return (
        <div className="py-6">
            <ReadingsList readings={readings} onRefresh={fetchReadings} />
        </div>
    );
};

export default Dashboard;