const ReadingItem = ({ reading, onEdit, onDelete }) => {
    const formatDate = (dateString) => {
        const options = { year: 'numeric', month: 'short', day: 'numeric' };
        return new Date(dateString).toLocaleDateString(undefined, options);
    };

    const getTypeLabel = (type) => {
        const labels = {
            morning: 'Morning',
            afternoon: 'Afternoon',
            evening: 'Evening',
        };
        return labels[type] || type;
    };

    return (
        <div className="p-4 border rounded-lg mb-3 bg-white shadow-sm">
            <div className="flex justify-between items-start">
                <div>
                    <span className="text-2xl font-bold">{reading.reading_value} mg/dL</span>
                    <span className={`ml-2 px-2 py-1 text-xs rounded ${
                        reading.reading_value > 180 ? 'bg-red-100 text-red-800' :
                            reading.reading_value < 70 ? 'bg-yellow-100 text-yellow-800' :
                                'bg-green-100 text-green-800'
                    }`}>
            {getTypeLabel(reading.reading_type)}
          </span>
                </div>
                <div className="text-gray-500">{formatDate(reading.recorded_at)}</div>
            </div>

            <div className="mt-2 flex space-x-2">
                <button
                    onClick={() => onEdit(reading)}
                    className="text-blue-500 hover:text-blue-700 text-sm"
                >
                    Edit
                </button>
                <button
                    onClick={() => onDelete(reading.id)}
                    className="text-red-500 hover:text-red-700 text-sm"
                >
                    Delete
                </button>
            </div>
        </div>
    );
};

export default ReadingItem;