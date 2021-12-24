import { useContext, useCallback } from 'react'
import PropTypes from 'prop-types'

import { Button, Dropdown } from 'components/elements'
import { deleteTask, duplicateTask, editTask } from 'actions'
import { TaskContext } from 'context'

const TaskActions = ({ id }) => {
  const { dispatch } = useContext(TaskContext)

  const duplicateTaskAction = useCallback(
    () => dispatch(duplicateTask(id)),
    [id]
  )
  const editTaskAction = useCallback(() => dispatch(editTask(id)), [id])
  const deleteTaskAction = useCallback(() => dispatch(deleteTask(id)), [id])

  return (
    <Dropdown
      trigger={(handler) => (
        <Button variant="ghost" icon="more" shape="square" onClick={handler}>
          Button
        </Button>
      )}
    >
      <Dropdown.Item icon="copy" onClick={duplicateTaskAction}>
        Duplicate
      </Dropdown.Item>
      <Dropdown.Item icon="edit" onClick={editTaskAction}>
        Edit
      </Dropdown.Item>
      <Dropdown.Item icon="delete" onClick={deleteTaskAction}>
        Delete
      </Dropdown.Item>
    </Dropdown>
  )
}

TaskActions.propTypes = {
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
}

export { TaskActions }
