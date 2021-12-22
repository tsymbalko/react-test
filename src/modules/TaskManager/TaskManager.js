import { useState, useCallback, useContext } from 'react'

import {
  Modal,
  Button,
  Paragraph,
  Card,
  Dropdown,
  Icon,
  List,
  Checkbox,
  Empty
} from 'components/elements'
import { TaskData, TaskList } from './components'

import { TaskContext } from 'context.js'
import { EDIT, DUPLICATE, DELETE } from 'actions'

const TaskManager = () => {
  const [modalVisible, setModalVisible] = useState(false)

  const { state, dispatch } = useContext(TaskContext)
  const { tasks } = state

  const dispatchAction = (action, payload) => {
    return () =>
      dispatch({
        type: action,
        payload: payload
      })
  }

  const closeModal = useCallback(
    () => setModalVisible(false),
    [setModalVisible]
  )
  const openModal = useCallback(() => setModalVisible(true), [setModalVisible])

  return (
    <>
      {tasks.length > 0 ? (
        <TaskList>
          {tasks.map(({ id, ...task }) => (
            <Card
              key={id}
              accent="var(--black)"
              title="Data at risk"
              icon={
                <Icon
                  width={2.4}
                  height={2.4}
                  name="caution"
                  fill="var(--white)"
                />
              }
              extra={
                <Dropdown
                  trigger={(handler) => (
                    <Button
                      variant="ghost"
                      icon="more"
                      shape="square"
                      onClick={handler}
                    >
                      Button
                    </Button>
                  )}
                >
                  <Dropdown.Item
                    icon="copy"
                    onClick={dispatchAction(DUPLICATE, { id })}
                  >
                    Duplicate
                  </Dropdown.Item>
                  <Dropdown.Item
                    icon="edit"
                    onClick={dispatchAction(EDIT, { id })}
                  >
                    Edit
                  </Dropdown.Item>
                  <Dropdown.Item
                    icon="delete"
                    onClick={dispatchAction(DELETE, { id })}
                  >
                    Delete
                  </Dropdown.Item>
                </Dropdown>
              }
              footer={<Button onClick={openModal}>Open modal</Button>}
            >
              {task.fields.map((field) => (
                <TaskData key={field.title} taskData={field} />
              ))}
            </Card>
          ))}
        </TaskList>
      ) : (
        <Empty description="No tasks" />
      )}

      <Modal
        visible={modalVisible}
        title="Lorem ipsum dolor sit amet"
        onClose={closeModal}
        footer={
          <>
            <Button variant="secondary" onClick={closeModal}>
              cancel
            </Button>
            <Button variant="primary" onClick={closeModal}>
              accept
            </Button>
          </>
        }
      >
        <Paragraph mb="1.6rem">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc gravida
          cursus nibh, sit amet varius purus lacinia at. Quisque tincidunt
          efficitur tempor. Proin pellentesque dictum mauris sed lobortis. Etiam
          nec mollis elit. Fusce et lacus tincidunt sem commodo condimentum et
          id lectus.
        </Paragraph>
        <Paragraph mb="1.6rem">
          Curabitur in pharetra ante. Aliquam in neque tristique, fermentum elit
          dignissim, laoreet lacus. Praesent viverra erat enim. Praesent quis
          ante rutrum, lacinia tortor ut, efficitur dolor. Pellentesque vehicula
          tempus neque, ac ornare libero tempor placerat.
        </Paragraph>
        <List mt="1.6rem" mb="1.6rem" flexDirection="column">
          <List.Item>
            <Checkbox label="Quisque tincidunt efficitur tempor" />
          </List.Item>
          <List.Item>
            <Checkbox label="Proin pellentesque dictum mauris sed lobortis" />
          </List.Item>
          <List.Item>
            <Checkbox label="Etiam nec mollis elit" />
          </List.Item>
        </List>
        <Paragraph mb="0.8rem" fontSize="1rem">
          Curabitur in pharetra ante. Aliquam in neque tristique, fermentum elit
          dignissim, laoreet lacus. Praesent viverra erat enim. Praesent quis
          ante rutrum, lacinia tortor ut, efficitur dolor. Pellentesque vehicula
          tempus neque, ac ornare libero tempor placerat.
        </Paragraph>
        <Paragraph mb="0.8rem" fontSize="1rem">
          Curabitur in pharetra ante. Aliquam in neque tristique, fermentum elit
          dignissim, laoreet lacus. Praesent viverra erat enim. Praesent quis
          ante rutrum, lacinia tortor ut, efficitur dolor. Pellentesque vehicula
          tempus neque, ac ornare libero tempor placerat.
        </Paragraph>
        <List mt="0.8rem" mb="0.8rem" flexDirection="row">
          <List.Item>
            <Checkbox label="Efficitur" />
          </List.Item>
          <List.Item>
            <Checkbox label="Lacinia" />
          </List.Item>
          <List.Item>
            <Checkbox label="Lacinia" />
          </List.Item>
        </List>
      </Modal>
    </>
  )
}

export { TaskManager }
