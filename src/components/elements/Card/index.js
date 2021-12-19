import React from 'react'
import PropTypes from 'prop-types'
import { Wrapper, Header, Icon, Extra, Title, Body, Footer } from './style'

const Card = ({ children, icon, title, extra, footer, accent }) => {
  const isShowHeader = icon || title || extra

  return (
    <Wrapper accent={accent}>
      {isShowHeader && (
        <Header>
          {icon && <Icon>{icon}</Icon>}
          <Title>{title}</Title>
          {extra && <Extra>{extra}</Extra>}
        </Header>
      )}
      <Body>{children}</Body>
      {footer && <Footer>{footer}</Footer>}
    </Wrapper>
  )
}

Card.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.node,
  icon: PropTypes.node,
  extra: PropTypes.node,
  accent: PropTypes.string
}

Card.defaultProps = {
  accent: 'var(--grey-light)'
}

export default Card
