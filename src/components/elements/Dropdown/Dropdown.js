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
} from './style'

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
  const [menuVisible, setMenuVisible] = useState(false)

  const closeMenu = useCallback(() => setMenuVisible(false), [setMenuVisible])
  const toggleMenu = useCallback(
    () => setMenuVisible(!menuVisible),
    [menuVisible, setMenuVisible]
  )

  useOutsideClick(menuWrapper, closeMenu)

  return (
    <Wrapper>
      {trigger(toggleMenu)}
      <CSSTransition
        nodeRef={menuWrapper}
        in={menuVisible}
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
