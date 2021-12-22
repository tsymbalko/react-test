import { EDIT, DUPLICATE, DELETE } from './actions'

export const taskReducer = (state, action) => {
  const { type, payload } = action
  switch (type) {
    case DUPLICATE:
      const [currentTask] = state.tasks.filter((task) => task.id === payload.id)
      const newTask = { ...currentTask, id: Math.random() }

      return {
        ...state,
        tasks: [...state.tasks, newTask]
      }

    case DELETE:
      const newState = state.tasks.filter((task) => task.id !== payload.id)
      return {
        ...state,
        tasks: newState
      }

    case EDIT:
      console.log('EDIT ACTION')
      return {
        ...state
      }

    default:
      return state
  }
}
