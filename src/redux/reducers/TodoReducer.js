import { EDIT_TASK, ADD_TASK, DELETE_TASK } from '../actions/Actions'
import { toast } from 'react-toastify';

export const initTodoState = [

]
// todo reducer
export const taskReducer = (state = initTodoState, action) => {
    switch (action.type) {
        case ADD_TASK:
            state = [...state, action.payload]
            toast.success('Added task successfully !')
            return state
        case EDIT_TASK:
            let updateTasks = [...state];
            updateTasks = updateTasks.filter(task => task.id === action.payload.id
                ? Object.assign(task, action.payload)
                : task)
            toast.success('Update task successfully !')
            return updateTasks
        case DELETE_TASK:
            let newTasks = [...state];
            newTasks = newTasks.filter(todo => todo.id === action.payload.id)
            toast.success('Deleted task successfully !')
            return newTasks
        default: return state
    }
}

