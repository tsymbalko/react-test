import { useRef } from 'react'
import PropTypes from 'prop-types'
import { CSSTransition } from 'react-transition-group'

import { Wrapper, Header, Body, Content, Footer, Close, Title } from './style'

import { useOutsideClick, useLayoutLock } from 'utils'

const Modal = ({ maxWidth, title, children, footer, visible, onClose }) => {
  const modalWrapper = useRef(null)
  const modalContent = useRef(null)

  useOutsideClick(modalContent, onClose)
  useLayoutLock(visible)

  return (
    <CSSTransition
      nodeRef={modalWrapper}
      in={visible}
      timeout={300}
      appear
      unmountOnExit
      classNames="fade-in-up"
    >
      <Wrapper ref={modalWrapper}>
        <Content maxWidth={maxWidth} ref={modalContent} role="dialog">
          <Header>
            {title && <Title>{title}</Title>}
            <Close
              variant="ghost"
              shape="square"
              icon="close"
              onClick={onClose}
            >
              Close modal
            </Close>
          </Header>
          <Body>{children}</Body>
          {footer && <Footer>{footer}</Footer>}
        </Content>
      </Wrapper>
    </CSSTransition>
  )
}

Modal.propTypes = {
  children: PropTypes.node.isRequired,
  footer: PropTypes.node,
  maxWidth: PropTypes.string,
  title: PropTypes.string,
  visible: PropTypes.bool,
  onClose: PropTypes.func
}

Modal.defaultProps = {
  maxWidth: '47rem'
}

export { Modal }
