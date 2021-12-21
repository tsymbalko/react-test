import PropTypes from 'prop-types'

import { Wrapper, Input, Label } from './Checkbox.styles'

const Checkbox = ({ label, disabled, onChange, checked }) => (
  <Wrapper>
    <Input
      type="checkbox"
      disabled={disabled}
      onChange={onChange}
      checked={checked}
    />
    <Label>{label}</Label>
  </Wrapper>
)

Checkbox.propTypes = {
  label: PropTypes.string,
  disabled: PropTypes.bool,
  checked: PropTypes.bool,
  onChange: PropTypes.func
}

export { Checkbox }
