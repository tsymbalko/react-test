import React from 'react'
import { Btn, BtnText } from './style'
import Icon from '../Icon'
import PropTypes from 'prop-types'

const Button = ({ type, size, children, icon, variant, shape, disabled }) => (
  <Btn
    type={type}
    size={size}
    disabled={disabled}
    variant={variant}
    shape={shape}
  >
    {icon && <Icon name={icon} />}
    <BtnText>{children}</BtnText>
  </Btn>
)

Button.propTypes = {
  shape: PropTypes.oneOf(['square', 'rectangle']),
  type: PropTypes.oneOf(['button', 'reset', 'submit']),
  variant: PropTypes.oneOf(['primary', 'secondary', 'ghost']),
  size: PropTypes.number,
  disabled: PropTypes.bool
}

Button.defaultProps = {
  shape: 'rectangle',
  type: 'button',
  variant: 'primary',
  size: 2.4
}

export default Button
