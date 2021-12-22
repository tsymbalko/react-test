import { useContext } from 'react'
import PropTypes from 'prop-types'

import { Button, Dropdown } from 'components/elements'
import { deleteTask, duplicateTask, editTask } from 'actions'
import { TaskContext } from 'context'

const TaskActions = ({ id }) => {
  const { dispatch } = useContext(TaskContext)

  return (
    <Dropdown
      trigger={(handler) => (
        <Button variant="ghost" icon="more" shape="square" onClick={handler}>
          Button
        </Button>
      )}
    >
      <Dropdown.Item icon="copy" onClick={() => dispatch(duplicateTask(id))}>
        Duplicate
      </Dropdown.Item>
      <Dropdown.Item icon="edit" onClick={() => dispatch(editTask())}>
        Edit
      </Dropdown.Item>
      <Dropdown.Item icon="delete" onClick={() => dispatch(deleteTask(id))}>
        Delete
      </Dropdown.Item>
    </Dropdown>
  )
}

TaskActions.propTypes = {
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
}

export { TaskActions }
