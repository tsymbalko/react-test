import { nanoid } from 'nanoid'
import { EDIT_TASK, DUPLICATE_TASK, DELETE_TASK } from './actions'

export const taskReducer = (state, action) => {
  const { type, payload } = action
  switch (type) {
    case DUPLICATE_TASK:
      const [currentTask] = state.tasks.filter((task) => task.id === payload.id)
      const newTask = { ...currentTask, id: nanoid() }

      return {
        ...state,
        tasks: [...state.tasks, newTask]
      }

    case DELETE_TASK:
      const newState = state.tasks.filter((task) => task.id !== payload.id)
      return {
        ...state,
        tasks: newState
      }

    case EDIT_TASK:
      console.log(`Edit task id: ${payload.id}`)
      return {
        ...state
      }

    default:
      return state
  }
}
