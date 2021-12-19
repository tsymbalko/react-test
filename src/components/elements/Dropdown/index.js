import React from 'react'
import PropTypes from 'prop-types'

import {
  MenuWrapper,
  CloseBtn,
  Wrapper,
  Menu,
  MenuItem,
  MenuBtn,
  MenuIcon
} from './style'

import useComponentVisible from '../../../helper/useComponentVisible'

const DropdownItem = ({ icon, children, onClick }) => (
  <MenuItem>
    <MenuBtn onClick={onClick}>
      {icon && <MenuIcon name={icon} />}
      {children}
    </MenuBtn>
  </MenuItem>
)

const Dropdown = ({ children, trigger }) => {
  const { ref, isComponentVisible, setIsComponentVisible } =
    useComponentVisible(false)
  const closeMenu = () => setIsComponentVisible(false)
  const toggleMenu = () => setIsComponentVisible(!isComponentVisible)

  return (
    <Wrapper ref={ref}>
      {React.cloneElement(trigger, { onClick: toggleMenu })}
      {isComponentVisible && (
        <MenuWrapper>
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
      )}
    </Wrapper>
  )
}

Dropdown.Item = DropdownItem

Dropdown.propTypes = {
  children: PropTypes.node.isRequired,
  trigger: PropTypes.node.isRequired
}

export default Dropdown
