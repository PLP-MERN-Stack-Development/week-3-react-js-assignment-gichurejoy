import Card from '../components/Card'
import Button from '../components/Button'
import { Link } from 'react-router-dom'

function Home() {
    return (
        <div className="space-y-12">
            <div className="text-center max-w-3xl mx-auto">
                <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                    Welcome to React Tasks
                </h1>
                <p className="text-xl text-gray-600 dark:text-gray-300">
                    A modern application showcasing React.js, Tailwind CSS, and modern web development practices.
                </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                <Card hover title="Task Management" className="border border-gray-100 dark:border-gray-700">
                    <p className="mb-6 min-h-[80px]">
                        Create, manage, and organize your tasks with our intuitive task manager.
                        Features include task filtering, completion tracking, and local storage persistence.
                    </p>
                    <Link to="/tasks">
                        <Button className="w-full">
                            Get Started
                        </Button>
                    </Link>
                </Card>

                <Card hover title="API Integration" className="border border-gray-100 dark:border-gray-700">
                    <p className="mb-6 min-h-[80px]">
                        Explore how we fetch and display data from external APIs with features
                        like loading states, error handling, search, and pagination.
                    </p>
                    <Link to="/api-demo">
                        <Button variant="secondary" className="w-full">
                            View Demo
                        </Button>
                    </Link>
                </Card>

                <Card hover title="Dark Mode" className="border border-gray-100 dark:border-gray-700">
                    <p className="mb-6 min-h-[80px]">
                        Experience seamless theme switching with our dark mode implementation.
                        Built using Tailwind CSS, it remembers your preference.
                    </p>
                    <Button variant="outline" className="w-full">
                        Try it →
                    </Button>
                </Card>
            </div>

            <div className="text-center">
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                    Built with modern technologies
                </p>
                <div className="flex justify-center space-x-4 text-sm">
                    <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full dark:bg-blue-900 dark:text-blue-200">React.js</span>
                    <span className="px-3 py-1 bg-teal-100 text-teal-800 rounded-full dark:bg-teal-900 dark:text-teal-200">Tailwind CSS</span>
                    <span className="px-3 py-1 bg-purple-100 text-purple-800 rounded-full dark:bg-purple-900 dark:text-purple-200">Vite</span>
                </div>
            </div>
        </div>
    )
}

export default Home 