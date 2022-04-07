import { combineReducers } from "redux";
import { taskReducer } from "./TodoReducer"
import { filterReducer } from "./FilterReducer";

export default combineReducers({
    filter: filterReducer,
    todo: taskReducer
})