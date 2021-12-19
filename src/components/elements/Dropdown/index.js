import React, { useRef, useState } from 'react'
import PropTypes from 'prop-types'
import { CSSTransition } from 'react-transition-group'
import useOutsideClick from '../../../helper/useOutsideClick'

import {
  MenuWrapper,
  CloseBtn,
  Wrapper,
  Menu,
  MenuItem,
  MenuBtn,
  MenuIcon
} from './style'

const DropdownItem = ({ icon, children, onClick }) => (
  <MenuItem>
    <MenuBtn onClick={onClick}>
      {icon && <MenuIcon name={icon} />}
      {children}
    </MenuBtn>
  </MenuItem>
)

const Dropdown = ({ children, trigger }) => {
  const menuWrapper = useRef(null)
  const [visible, setVisible] = useState(false)

  const closeMenu = () => setVisible(false)
  const toggleMenu = () => setVisible(!visible)

  useOutsideClick(menuWrapper, closeMenu)

  return (
    <Wrapper>
      {React.cloneElement(trigger, { onClick: toggleMenu })}
      <CSSTransition
        nodeRef={menuWrapper}
        in={visible}
        timeout={300}
        appear
        unmountOnExit
        classNames="fade-in-up"
      >
        <MenuWrapper ref={menuWrapper}>
          <CloseBtn
            icon={'close'}
            variant={'ghost'}
            shape={'square'}
            size={1.6}
            onClick={closeMenu}
          >
            Close
          </CloseBtn>
          <Menu role={'menu'}>{children}</Menu>
        </MenuWrapper>
      </CSSTransition>
    </Wrapper>
  )
}

Dropdown.Item = DropdownItem

Dropdown.propTypes = {
  children: PropTypes.node.isRequired,
  trigger: PropTypes.node.isRequired
}

export default Dropdown
