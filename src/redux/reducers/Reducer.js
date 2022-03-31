import { ADD_TASK_GROUP, EDIT_TASK_GROUP, DELETE_TASK_GROUP } from './actions/Actions'
import { todo } from '../states/States'
export let reducer = (state = todo, action) => {
    switch (action.type) {
        case ADD_TASK_GROUP:

            break;
        case EDIT_TASK_GROUP:

            break;
        case DELETE_TASK_GROUP:

            break;
        default:
            return state;
    }
}