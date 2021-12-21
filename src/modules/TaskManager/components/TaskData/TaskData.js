import PropTypes from 'prop-types'

import { Wrapper, Title, Row, Text, Value, Content } from './style'

const TaskData = ({ task }) => {
  const { title, data } = task
  return (
    <Wrapper>
      <Title>{title}:</Title>
      <Content>
        {data.map(({ text, count }) => (
          <Row key={text}>
            <Text>{text}</Text>
            {count && <Value>{count}</Value>}
          </Row>
        ))}
      </Content>
    </Wrapper>
  )
}

TaskData.propTypes = {
  task: PropTypes.shape({
    title: PropTypes.string.isRequired,
    data: PropTypes.arrayOf(
      PropTypes.shape({
        text: PropTypes.string,
        count: PropTypes.string
      })
    )
  })
}

export { TaskData }
