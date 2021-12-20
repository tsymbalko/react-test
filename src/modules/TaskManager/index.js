import { useState } from 'react'

import TaskList from './components/TaskList'
import Modal from '../../components/elements/Modal'
import Button from '../../components/elements/Button'
import Paragraph from '../../components/elements/Paragraph'
import Card from '../../components/elements/Card'
import Dropdown from '../../components/elements/Dropdown'
import TaskData from './components/TaskData'
import Icon from '../../components/elements/Icon'
import List from '../../components/elements/List'
import Checkbox from '../../components/elements/Checkbox'

const TaskManager = () => {
  const [modalVisible, setModalVisible] = useState(false)

  const closeModal = () => setModalVisible(false)
  const openModal = () => setModalVisible(true)

  const data = [
    {
      id: 1,
      title: 'Name',
      data: [
        {
          text: 'orca-demo-bucket-db'
        }
      ]
    },
    {
      id: 2,
      title: 'Type',
      data: [
        {
          text: 'AWS S3 Bucket'
        }
      ]
    },
    {
      id: 3,
      title: 'Tests',
      data: [
        {
          text: 'ec2-14175-131-61.cc2-14175-131-61.co',
          count: '118 / 120'
        },
        {
          text: '7fe00efc-8cfc-4454',
          count: '7 / 10'
        }
      ]
    }
  ]
  const tasks = [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }]

  return (
    <>
      <TaskList>
        {tasks.map(({ id }) => (
          <Card
            key={id}
            accent={'var(--black)'}
            title={'Data at risk'}
            icon={
              <Icon
                width={2.4}
                height={2.4}
                name={'caution'}
                fill={'var(--white)'}
              />
            }
            extra={
              <Dropdown
                trigger={
                  <Button variant={'ghost'} icon={'more'} shape={'square'}>
                    Button
                  </Button>
                }
              >
                <Dropdown.Item icon={'copy'}>Duplicate</Dropdown.Item>
                <Dropdown.Item icon={'edit'}>Edit</Dropdown.Item>
                <Dropdown.Item icon={'delete'}>Delete</Dropdown.Item>
              </Dropdown>
            }
            footer={<Button onClick={openModal}>Open modal</Button>}
          >
            {data.map(({ id, ...task }) => (
              <TaskData key={id} task={task} />
            ))}
          </Card>
        ))}
      </TaskList>
      <Modal
        visible={modalVisible}
        title={'Lorem ipsum dolor sit amet'}
        onClose={closeModal}
        footer={
          <>
            <Button variant={'secondary'} onClick={closeModal}>
              cancel
            </Button>
            <Button variant={'primary'} onClick={closeModal}>
              accept
            </Button>
          </>
        }
      >
        <Paragraph mb={'1.6rem'}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc gravida
          cursus nibh, sit amet varius purus lacinia at. Quisque tincidunt
          efficitur tempor. Proin pellentesque dictum mauris sed lobortis. Etiam
          nec mollis elit. Fusce et lacus tincidunt sem commodo condimentum et
          id lectus.
        </Paragraph>
        <Paragraph mb={'1.6rem'}>
          Curabitur in pharetra ante. Aliquam in neque tristique, fermentum elit
          dignissim, laoreet lacus. Praesent viverra erat enim. Praesent quis
          ante rutrum, lacinia tortor ut, efficitur dolor. Pellentesque vehicula
          tempus neque, ac ornare libero tempor placerat.
        </Paragraph>
        <List mt={'1.6rem'} mb={'1.6rem'} flexDirection={'column'}>
          <List.Item>
            <Checkbox label={'Quisque tincidunt efficitur tempor'} />
          </List.Item>
          <List.Item>
            <Checkbox label={'Proin pellentesque dictum mauris sed lobortis'} />
          </List.Item>
          <List.Item>
            <Checkbox label={'Etiam nec mollis elit'} />
          </List.Item>
        </List>
        <Paragraph mb={'0.8rem'} fontSize={'1rem'}>
          Curabitur in pharetra ante. Aliquam in neque tristique, fermentum elit
          dignissim, laoreet lacus. Praesent viverra erat enim. Praesent quis
          ante rutrum, lacinia tortor ut, efficitur dolor. Pellentesque vehicula
          tempus neque, ac ornare libero tempor placerat.
        </Paragraph>
        <Paragraph mb={'0.8rem'} fontSize={'1rem'}>
          Curabitur in pharetra ante. Aliquam in neque tristique, fermentum elit
          dignissim, laoreet lacus. Praesent viverra erat enim. Praesent quis
          ante rutrum, lacinia tortor ut, efficitur dolor. Pellentesque vehicula
          tempus neque, ac ornare libero tempor placerat.
        </Paragraph>
        <List mt={'0.8rem'} mb={'0.8rem'} flexDirection={'row'}>
          <List.Item>
            <Checkbox label={'Efficitur'} />
          </List.Item>
          <List.Item>
            <Checkbox label={'Lacinia'} />
          </List.Item>
          <List.Item>
            <Checkbox label={'Lacinia'} />
          </List.Item>
        </List>
      </Modal>
    </>
  )
}

export default TaskManager
