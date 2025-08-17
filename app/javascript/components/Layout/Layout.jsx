import Header from './Header';

const Layout = ({ children }) => {
    return (
        <div className="min-h-screen bg-gray-100">
            <Header />
            <main className="py-6 px-4">{children}</main>
        </div>
    );
};

export default Layout;