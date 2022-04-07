import { FILTER_TASK } from "../../constants";

export const getTodosByVisibilityFilter = (store, visibilityFiler) => {
  switch (visibilityFiler) {
    case FILTER_TASK.COMPLETED:
      let comTask = [...store]
      comTask = comTask.filter(todo => todo.status === "completed")
      return comTask
    case FILTER_TASK.INCOMPLETED:
      let inTask = [...store]
      inTask = inTask.filter(todo => todo.status === "incompleted")
      return inTask
    default:
      return store;
  }
}