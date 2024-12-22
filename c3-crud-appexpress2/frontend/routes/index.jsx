import TaskListing from '../src/pages/TaskListing'
import AddTask from '../src/pages/AddTask'

export const routes = [
    {
        path: '/',
        element: <TaskListing />
    },
    {
        path: '/add',
        element: <AddTask />
    },
    {
        path: '/edit/:id',
        element: <AddTask />
    }
]