const Home = () => {
    return (
        <div className="max-w-4xl mx-auto py-10 px-4 text-center">
            <h1 className="text-3xl font-bold mb-6">Welcome to Glucose Tracker</h1>
            <p className="text-lg mb-8">
                Track your blood glucose levels easily and monitor your health.
            </p>
            <div className="bg-white p-6 rounded-lg shadow-md inline-block">
                <p>Please login to access your readings.</p>
            </div>
        </div>
    );
};

export default Home;