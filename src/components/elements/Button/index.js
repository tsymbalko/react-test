import React from 'react'
import PropTypes from 'prop-types'

import { Btn, BtnText, BtnIcon } from './style'

const Button = ({
  type,
  icon,
  variant,
  shape,
  size,
  className,
  children,
  disabled,
  onClick
}) => (
  <Btn
    type={type}
    size={size}
    disabled={disabled}
    variant={variant}
    shape={shape}
    className={className}
    onClick={onClick}
  >
    {icon && <BtnIcon name={icon} />}
    <BtnText>{children}</BtnText>
  </Btn>
)

Button.propTypes = {
  shape: PropTypes.oneOf(['square', 'rectangle']),
  type: PropTypes.oneOf(['button', 'reset', 'submit']),
  variant: PropTypes.oneOf(['primary', 'secondary', 'ghost']),
  className: PropTypes.string,
  icon: PropTypes.string,
  size: PropTypes.number,
  disabled: PropTypes.bool,
  onClick: PropTypes.func
}

Button.defaultProps = {
  shape: 'rectangle',
  type: 'button',
  variant: 'primary',
  size: 2.4
}

export default Button
