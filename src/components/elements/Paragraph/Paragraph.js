import PropTypes from 'prop-types'

import { Text } from './style'

const Paragraph = ({ children, ...props }) => <Text {...props}>{children}</Text>

Paragraph.propTypes = {
  children: PropTypes.node.isRequired
}

Paragraph.defaultProps = {
  fontSize: '1.2rem',
  color: 'var(--black)'
}
export { Paragraph }
