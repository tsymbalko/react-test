import PropTypes from 'prop-types'
import { useEffect, useRef } from 'react'
import { CSSTransition } from 'react-transition-group'

import { Footer, Body, Close, Content, Header, Title, Wrapper } from './style'

const Modal = ({ maxWidth, title, children, footer, visible, onClose }) => {
  const modalWrapper = useRef(null)
  const modalContent = useRef(null)

  const handleClickOutside = (event) => {
    if (modalContent.current && !modalContent.current.contains(event.target)) {
      onClose()
    }
  }

  useEffect(() => {
    document.addEventListener('click', handleClickOutside, true)
    return () => {
      document.removeEventListener('click', handleClickOutside, true)
    }
  })

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
        <Content maxWidth={maxWidth} ref={modalContent}>
          <Header>
            {title && <Title>{title}</Title>}
            <Close
              variant={'ghost'}
              shape={'square'}
              icon={'close'}
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
  maxWidth: PropTypes.string,
  title: PropTypes.string,
  children: PropTypes.node.isRequired,
  footer: PropTypes.node
}

Modal.defaultProps = {
  maxWidth: '47rem'
}

export default Modal
