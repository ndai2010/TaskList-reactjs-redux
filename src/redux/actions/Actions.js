export const ADD_TASK = "ADD_TASK"
export const EDIT_TASK = "EDIT_TASK"
export const DELETE_TASK = "DELETE_TASK"
export const FILTER_STATUS = "FILTER_STATUS"

export function addTask(data) {
    return {
        type: ADD_TASK,
        payload: data
    }
}

export function editTask(taskID) {
    return {
        type: EDIT_TASK,
        payload: taskID
    }
}

export function deleteTask(taskId) {
    return {
        type: DELETE_TASK,
        payload: taskId
    }
}
export function filterStatus(filter) {
    return {
        type: FILTER_STATUS,
        payload: filter
    }
}