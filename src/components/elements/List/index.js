import PropTypes from 'prop-types'
import { Item, Wrapper } from './style'

const List = ({ children, ...attrs }) => (
  <Wrapper {...attrs}>{children}</Wrapper>
)

List.Item = Item

List.propTypes = {
  children: PropTypes.node
}

List.defaultProps = {
  gap: '0.8rem'
}

export default List
