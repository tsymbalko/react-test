import React from 'react'
import PropTypes from 'prop-types'

import { Layout } from './DefaultTemplate.styles'

const DefaultTemplate = ({ children }) => <Layout>{children}</Layout>

DefaultTemplate.propTypes = {
  children: PropTypes.node.isRequired
}

export { DefaultTemplate }
