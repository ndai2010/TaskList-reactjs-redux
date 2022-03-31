export const ADD_TASK = "ADD_TASK"
export const EDIT_TASK = "EDIT_TASK"
export const DELETE_TASK = "DELETE_TASK"

export function addTaskGroup(task) {
    return {
        type: ADD_TASK,
        payload: task
    }
}

export function editTaskGroup(task) {
    return {
        type: EDIT_TASK,
        payload: task
    }
}

export function deleteTaskGroup(taskId) {
    return {
        type: DELETE_TASK,
        payload: taskId
    }
}