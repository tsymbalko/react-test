import Card from '../../../../components/elements/Card'
import Icon from '../../../../components/elements/Icon'
import Button from '../../../../components/elements/Button'
import TaskData from '../../components/TaskData'

const CautionIcon = () => (
  <Icon width={2.4} height={2.4} name={'caution'} fill={'var(--white)'} />
)

const Task = () => {
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
  return (
    <Card
      accent={'var(--black)'}
      title={'Data at risk'}
      icon={<CautionIcon />}
      extra={
        <Button variant={'ghost'} icon={'more'} shape={'square'}>
          Button
        </Button>
      }
      footer={<Button>Open modal</Button>}
    >
      {data.map(({ id, ...task }) => (
        <TaskData key={id} task={task} />
      ))}
    </Card>
  )
}

export default Task
