import PropTypes from 'prop-types'

import { Card, Icon } from 'components/elements'
import { TaskActions } from '../TaskActions'
import { TaskData } from '../TaskData'

const Task = ({ task, footer }) => {
  const { id, title, fields } = task

  return (
    <Card
      key={id}
      accent="var(--black)"
      title={title}
      icon={
        <Icon width={2.4} height={2.4} name="caution" fill="var(--white)" />
      }
      extra={<TaskActions id={id} />}
      footer={footer}
    >
      {fields.map((field) => (
        <TaskData key={field.title} taskData={field} />
      ))}
    </Card>
  )
}

Card.propTypes = {
  task: PropTypes.objectOf({
    id: PropTypes.string,
    title: PropTypes.string,
    fields: PropTypes.arrayOf(
      PropTypes.shape({
        text: PropTypes.string,
        count: PropTypes.string
      })
    )
  })
}

export { Task }
