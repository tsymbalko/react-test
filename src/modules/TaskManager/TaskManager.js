import { useState, useCallback, useContext } from 'react'

import { Button, Empty } from 'components/elements'
import { TaskList, Task, TaskSettings } from './components'

import { TaskContext } from 'context'

const TaskManager = () => {
  const [isModalVisible, setModalVisible] = useState(false)

  const {
    state: { tasks }
  } = useContext(TaskContext)

  const closeModal = useCallback(
    () => setModalVisible(false),
    [setModalVisible]
  )
  const openModal = useCallback(() => setModalVisible(true), [setModalVisible])

  return (
    <>
      {tasks.length > 0 ? (
        <TaskList>
          {tasks.map((task) => (
            <Task
              key={task.id}
              task={task}
              footer={<Button onClick={openModal}>Open modal</Button>}
            />
          ))}
        </TaskList>
      ) : (
        <Empty description="No tasks" />
      )}
      <TaskSettings isVisible={isModalVisible} onClose={closeModal} />
    </>
  )
}

export { TaskManager }
