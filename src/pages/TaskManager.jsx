import { useState } from 'react'
import Card from '../components/Card'
import Button from '../components/Button'
import useLocalStorage from '../hooks/useLocalStorage'
import { PlusIcon, TrashIcon } from '@heroicons/react/24/outline'

function TaskManager() {
    const [tasks, setTasks] = useLocalStorage('tasks', [])
    const [newTask, setNewTask] = useState('')
    const [filter, setFilter] = useState('all')

    const addTask = (e) => {
        e.preventDefault()
        if (!newTask.trim()) return

        setTasks([
            ...tasks,
            {
                id: Date.now(),
                text: newTask.trim(),
                completed: false,
                createdAt: new Date().toISOString(),
            },
        ])
        setNewTask('')
    }

    const toggleTask = (taskId) => {
        setTasks(
            tasks.map((task) =>
                task.id === taskId ? { ...task, completed: !task.completed } : task
            )
        )
    }

    const deleteTask = (taskId) => {
        setTasks(tasks.filter((task) => task.id !== taskId))
    }

    const filteredTasks = tasks.filter((task) => {
        if (filter === 'active') return !task.completed
        if (filter === 'completed') return task.completed
        return true
    })

    return (
        <Card title="Task Manager" className="max-w-2xl mx-auto">
            <form onSubmit={addTask} className="mb-8">
                <div className="flex gap-2">
                    <input
                        type="text"
                        value={newTask}
                        onChange={(e) => setNewTask(e.target.value)}
                        placeholder="Add a new task..."
                        className="flex-1 px-4 py-2 border border-gray-200 dark:border-gray-600 rounded-lg 
                     focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent
                     dark:bg-gray-700 dark:text-white placeholder-gray-400 dark:placeholder-gray-300
                     transition-all duration-200"
                    />
                    <Button type="submit" className="flex items-center gap-2">
                        <PlusIcon className="h-5 w-5" />
                        <span>Add Task</span>
                    </Button>
                </div>
            </form>

            <div className="flex flex-wrap gap-2 mb-6">
                <Button
                    variant={filter === 'all' ? 'primary' : 'outline'}
                    onClick={() => setFilter('all')}
                    className="flex-1 sm:flex-none"
                >
                    All ({tasks.length})
                </Button>
                <Button
                    variant={filter === 'active' ? 'primary' : 'outline'}
                    onClick={() => setFilter('active')}
                    className="flex-1 sm:flex-none"
                >
                    Active ({tasks.filter(t => !t.completed).length})
                </Button>
                <Button
                    variant={filter === 'completed' ? 'primary' : 'outline'}
                    onClick={() => setFilter('completed')}
                    className="flex-1 sm:flex-none"
                >
                    Completed ({tasks.filter(t => t.completed).length})
                </Button>
            </div>

            <div className="space-y-3">
                {filteredTasks.map((task) => (
                    <div
                        key={task.id}
                        className="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-700/50 
                     rounded-lg border border-gray-100 dark:border-gray-600 transition-all duration-200
                     hover:shadow-md"
                    >
                        <div className="flex items-center gap-3 flex-1">
                            <input
                                type="checkbox"
                                checked={task.completed}
                                onChange={() => toggleTask(task.id)}
                                className="h-5 w-5 rounded border-gray-300 text-blue-600 
                         focus:ring-blue-500 transition-colors duration-200
                         dark:border-gray-500 dark:bg-gray-600"
                            />
                            <div className="flex-1">
                                <span
                                    className={`${task.completed
                                            ? 'line-through text-gray-400 dark:text-gray-500'
                                            : 'text-gray-700 dark:text-gray-200'
                                        } transition-colors duration-200`}
                                >
                                    {task.text}
                                </span>
                                <p className="text-xs text-gray-400 dark:text-gray-500 mt-1">
                                    Added {new Date(task.createdAt).toLocaleDateString()}
                                </p>
                            </div>
                        </div>
                        <Button
                            variant="danger"
                            onClick={() => deleteTask(task.id)}
                            className="ml-4 !p-2"
                        >
                            <TrashIcon className="h-5 w-5" />
                        </Button>
                    </div>
                ))}
                {filteredTasks.length === 0 && (
                    <div className="text-center py-8">
                        <p className="text-gray-500 dark:text-gray-400 mb-2">No tasks found</p>
                        <p className="text-sm text-gray-400 dark:text-gray-500">
                            {filter === 'all'
                                ? 'Add a new task to get started'
                                : `No ${filter} tasks`}
                        </p>
                    </div>
                )}
            </div>
        </Card>
    )
}

export default TaskManager 