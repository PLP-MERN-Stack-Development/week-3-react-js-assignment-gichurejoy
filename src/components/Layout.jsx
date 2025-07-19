import { Link } from 'react-router-dom'
import { SunIcon, MoonIcon } from '@heroicons/react/24/outline'

function Layout({ children, isDarkMode, setIsDarkMode }) {
    return (
        <div className="min-h-screen flex flex-col bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
            {/* Navbar */}
            <nav className="bg-white dark:bg-gray-800 shadow-lg fixed w-full z-10 transition-colors duration-300">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between h-16">
                        <div className="flex items-center">
                            <Link to="/" className="flex items-center">
                                <span className="text-2xl font-bold text-blue-600 dark:text-blue-400">React Tasks</span>
                            </Link>
                            <div className="hidden md:flex items-center space-x-8 ml-10">
                                <Link to="/" className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200">Home</Link>
                                <Link to="/tasks" className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200">Tasks</Link>
                                <Link to="/api-demo" className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200">API Demo</Link>
                            </div>
                        </div>
                        <div className="flex items-center">
                            <button
                                onClick={() => setIsDarkMode(!isDarkMode)}
                                className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-200"
                                aria-label="Toggle dark mode"
                            >
                                {isDarkMode ? (
                                    <SunIcon className="h-6 w-6 text-yellow-400" />
                                ) : (
                                    <MoonIcon className="h-6 w-6 text-gray-600" />
                                )}
                            </button>
                        </div>
                    </div>
                </div>
            </nav>

            {/* Mobile menu */}
            <div className="md:hidden fixed bottom-0 w-full bg-white dark:bg-gray-800 shadow-lg z-10">
                <div className="flex justify-around py-4">
                    <Link to="/" className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400">
                        Home
                    </Link>
                    <Link to="/tasks" className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400">
                        Tasks
                    </Link>
                    <Link to="/api-demo" className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400">
                        API Demo
                    </Link>
                </div>
            </div>

            {/* Main content */}
            <main className="flex-grow container mx-auto px-4 py-8 mt-16 mb-16 md:mb-8">
                {children}
            </main>

            {/* Footer */}
            <footer className="bg-white dark:bg-gray-800 shadow-lg mt-auto transition-colors duration-300">
                <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
                    <div className="text-center">
                        <p className="text-gray-600 dark:text-gray-300">&copy; 2024 React Tasks. All rights reserved.</p>
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default Layout 