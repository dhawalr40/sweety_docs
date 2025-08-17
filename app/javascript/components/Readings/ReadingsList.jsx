import { useState } from 'react';
import ReadingItem from './ReadingItem';
import ReadingForm from './ReadingForm';
import api from '../../services/api';

const ReadingsList = ({ readings, onRefresh }) => {
    const [editingReading, setEditingReading] = useState(null);
    const [showForm, setShowForm] = useState(false);

    const handleDelete = async (id) => {
        try {
            await api.delete(`/readings/${id}`);
            onRefresh();
        } catch (error) {
            console.error('Error deleting reading:', error);
        }
    };

    const handleSubmit = async (data) => {
        try {
            if (editingReading) {
                await api.put(`/readings/${editingReading.id}`, data);
            } else {
                await api.post('/readings', data);
            }
            setShowForm(false);
            setEditingReading(null);
            onRefresh();
        } catch (error) {
            console.error('Error saving reading:', error);
        }
    };

    return (
        <div className="max-w-2xl mx-auto">
            <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl font-semibold">Blood Glucose Readings</h2>
                <button
                    onClick={() => {
                        setEditingReading(null);
                        setShowForm(true);
                    }}
                    className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                >
                    Add New Reading
                </button>
            </div>

            {showForm && (
                <div className="mb-6 p-4 bg-gray-50 rounded-lg">
                    <ReadingForm
                        onSubmit={handleSubmit}
                        initialData={editingReading || {}}
                    />
                    <button
                        onClick={() => {
                            setShowForm(false);
                            setEditingReading(null);
                        }}
                        className="mt-2 text-gray-500 hover:text-gray-700"
                    >
                        Cancel
                    </button>
                </div>
            )}

            <div className="space-y-3">
                { !Array.isArray(readings) || readings.length === 0 ? (
                    <p className="text-gray-500">No readings yet. Add your first reading!</p>
                ) : (
                    readings.map((reading) => (
                        <ReadingItem
                            key={reading.id}
                            reading={reading}
                            onEdit={(reading) => {
                                setEditingReading(reading);
                                setShowForm(true);
                            }}
                            onDelete={handleDelete}
                        />
                    ))
                )}
            </div>
        </div>
    );
};

export default ReadingsList;