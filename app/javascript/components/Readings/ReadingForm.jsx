import { useState } from 'react';

const ReadingForm = ({ onSubmit, initialData = {} }) => {
    const [formData, setFormData] = useState({
        reading_value: initialData.reading_value || '',
        recorded_at: initialData.recorded_at || '',
        reading_type: initialData.reading_type || 'morning',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit({
            blood_glucose_reading: formData,
        });
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-4">
            <div>
                <label className="block text-gray-700 mb-1">Reading Value (mg/dL)</label>
                <input
                    type="number"
                    name="reading_value"
                    value={formData.reading_value}
                    onChange={handleChange}
                    className="w-full p-2 border rounded"
                    required
                />
            </div>

            <div>
                <label className="block text-gray-700 mb-1">Date Recorded</label>
                <input
                    type="date"
                    name="recorded_at"
                    value={formData.recorded_at}
                    onChange={handleChange}
                    className="w-full p-2 border rounded"
                    required
                />
            </div>

            <div>
                <label className="block text-gray-700 mb-1">Reading Type</label>
                <select
                    name="reading_type"
                    value={formData.reading_type}
                    onChange={handleChange}
                    className="w-full p-2 border rounded"
                    required
                >
                    <option value="morning">Morning</option>
                    <option value="afternoon">Afternoon</option>
                    <option value="evening">Evening</option>
                </select>
            </div>

            <button
                type="submit"
                className="w-full bg-green-500 text-white p-2 rounded hover:bg-green-600"
            >
                {initialData.id ? 'Update Reading' : 'Add Reading'}
            </button>
        </form>
    );
};

export default ReadingForm;