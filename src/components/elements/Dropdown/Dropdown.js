import React, { useRef, useState, useCallback } from 'react'
import PropTypes from 'prop-types'
import { CSSTransition } from 'react-transition-group'

import {
  MenuWrapper,
  CloseBtn,
  Wrapper,
  Menu,
  MenuItem,
  MenuBtn,
  MenuIcon
} from './Dropdown.styles'

import { useOutsideClick } from 'utils'

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
  const [isMenuVisible, setMenuVisible] = useState(false)

  const closeMenu = useCallback(() => setMenuVisible(false), [setMenuVisible])
  const toggleMenu = useCallback(
    () => setMenuVisible(!isMenuVisible),
    [isMenuVisible, setMenuVisible]
  )

  useOutsideClick(menuWrapper, closeMenu)

  return (
    <Wrapper>
      {trigger(toggleMenu)}
      <CSSTransition
        nodeRef={menuWrapper}
        in={isMenuVisible}
        timeout={300}
        appear
        unmountOnExit
        classNames="fade-in-up"
      >
        <MenuWrapper ref={menuWrapper}>
          <CloseBtn
            icon="close"
            variant="ghost"
            shape="square"
            size={1.6}
            onClick={closeMenu}
          >
            Close
          </CloseBtn>
          <Menu role="menu" onClick={closeMenu}>
            {children}
          </Menu>
        </MenuWrapper>
      </CSSTransition>
    </Wrapper>
  )
}

Dropdown.Item = DropdownItem

Dropdown.propTypes = {
  children: PropTypes.node.isRequired,
  trigger: PropTypes.func.isRequired
}

DropdownItem.protoTypes = {
  icon: PropTypes.node,
  children: PropTypes.node,
  onClick: PropTypes.func
}

export { Dropdown }
