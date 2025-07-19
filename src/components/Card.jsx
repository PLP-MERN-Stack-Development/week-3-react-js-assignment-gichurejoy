function Card({ children, className = '', title, hover = false }) {
    const baseClasses = 'bg-white dark:bg-gray-800 rounded-xl shadow-md transition-all duration-200'
    const hoverClasses = hover ? 'hover:shadow-xl transform hover:-translate-y-1' : ''

    return (
        <div className={`${baseClasses} ${hoverClasses} ${className}`}>
            <div className="p-6">
                {title && (
                    <h2 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">{title}</h2>
                )}
                <div className="text-gray-600 dark:text-gray-300">
                    {children}
                </div>
            </div>
        </div>
    )
}

export default Card 