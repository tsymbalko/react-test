import PropTypes from 'prop-types'
import { Item, Wrapper } from './style'

const List = ({ children, flexDirection, mt, mb, gap }) => (
  <Wrapper mt={mt} mb={mb} flexDirection={flexDirection} gap={gap}>
    {children}
  </Wrapper>
)

List.Item = Item

List.propTypes = {
  children: PropTypes.node,
  flexDirection: PropTypes.oneOf(['row', 'column']),
  gap: PropTypes.string,
  mt: PropTypes.string,
  mb: PropTypes.string
}

List.defaultProps = {
  flexDirection: 'row',
  gap: '0.8rem'
}

export default List
