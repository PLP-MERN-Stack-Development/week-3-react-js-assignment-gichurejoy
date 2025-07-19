import { useState, useEffect } from 'react'
import Card from '../components/Card'
import Button from '../components/Button'
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline'

function ApiDemo() {
    const [posts, setPosts] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)
    const [searchTerm, setSearchTerm] = useState('')
    const [page, setPage] = useState(1)

    useEffect(() => {
        fetchPosts()
    }, [page])

    const fetchPosts = async () => {
        try {
            setLoading(true)
            const response = await fetch(
                `https://jsonplaceholder.typicode.com/posts?_page=${page}&_limit=6`
            )
            if (!response.ok) throw new Error('Failed to fetch posts')
            const data = await response.json()
            setPosts(data)
            setError(null)
        } catch (err) {
            setError(err.message)
        } finally {
            setLoading(false)
        }
    }

    const filteredPosts = posts.filter((post) =>
        post.title.toLowerCase().includes(searchTerm.toLowerCase())
    )

    return (
        <div className="space-y-8">
            <Card title="API Integration Demo" className="bg-gradient-to-r from-blue-500 to-purple-500 text-white">
                <p className="text-white/90">
                    This demo fetches and displays posts from the JSONPlaceholder API,
                    demonstrating loading states, error handling, search, and pagination.
                </p>
            </Card>

            <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <MagnifyingGlassIcon className="h-5 w-5 text-gray-400" />
                </div>
                <input
                    type="text"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    placeholder="Search posts..."
                    className="w-full pl-10 pr-4 py-2 border border-gray-200 dark:border-gray-600 rounded-lg 
                   focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent
                   dark:bg-gray-700 dark:text-white placeholder-gray-400 dark:placeholder-gray-300
                   transition-all duration-200"
                />
            </div>

            {loading ? (
                <div className="flex flex-col items-center justify-center py-12">
                    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500"></div>
                    <p className="mt-4 text-gray-500 dark:text-gray-400">Loading posts...</p>
                </div>
            ) : error ? (
                <Card className="bg-red-50 dark:bg-red-900/20 border-2 border-red-200 dark:border-red-800">
                    <div className="text-center py-4">
                        <p className="text-red-600 dark:text-red-400 font-medium">{error}</p>
                        <Button
                            variant="outline"
                            onClick={fetchPosts}
                            className="mt-4"
                        >
                            Try Again
                        </Button>
                    </div>
                </Card>
            ) : (
                <>
                    <div className="grid md:grid-cols-2 gap-6">
                        {filteredPosts.map((post) => (
                            <Card
                                key={post.id}
                                hover
                                className="border border-gray-100 dark:border-gray-700"
                            >
                                <span className="inline-block px-2 py-1 bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 text-xs rounded-full mb-2">
                                    Post #{post.id}
                                </span>
                                <h3 className="text-lg font-semibold mb-3 text-gray-900 dark:text-white capitalize">
                                    {post.title}
                                </h3>
                                <p className="text-gray-600 dark:text-gray-300 line-clamp-3">
                                    {post.body}
                                </p>
                            </Card>
                        ))}
                    </div>

                    {filteredPosts.length === 0 && (
                        <div className="text-center py-12">
                            <p className="text-gray-500 dark:text-gray-400 mb-2">No posts found</p>
                            <p className="text-sm text-gray-400 dark:text-gray-500">
                                Try adjusting your search term
                            </p>
                        </div>
                    )}

                    <div className="flex justify-center gap-4 mt-8">
                        <Button
                            variant="outline"
                            onClick={() => setPage((p) => Math.max(1, p - 1))}
                            disabled={page === 1}
                            className="min-w-[100px]"
                        >
                            Previous
                        </Button>
                        <Button
                            variant="outline"
                            onClick={() => setPage((p) => p + 1)}
                            disabled={posts.length < 6}
                            className="min-w-[100px]"
                        >
                            Next
                        </Button>
                    </div>
                </>
            )}
        </div>
    )
}

export default ApiDemo 