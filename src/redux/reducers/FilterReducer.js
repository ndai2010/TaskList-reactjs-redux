import { FILTER_STATUS } from '../actions/Actions'
import { FILTER_TASK } from '../../constants'
const initFilterState = FILTER_TASK.ALL
// filter reducer
export const filterReducer = (state = initFilterState, action) => {
    switch (action.type) {
        case FILTER_STATUS:
            return action.payload
        default:
            return state
    }
}