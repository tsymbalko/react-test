const EDIT_TASK = 'EDIT_TASK'
const DUPLICATE_TASK = 'DUPLICATE_TASK'
const DELETE_TASK = 'DELETE_TASK'

export { EDIT_TASK, DUPLICATE_TASK, DELETE_TASK }

export const editTask = () => {
  return {
    type: EDIT_TASK
  }
}

export const duplicateTask = (id) => {
  return {
    type: DUPLICATE_TASK,
    payload: {
      id
    }
  }
}

export const deleteTask = (id) => {
  return {
    type: DELETE_TASK,
    payload: {
      id
    }
  }
}
