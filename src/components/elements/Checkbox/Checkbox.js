import PropTypes from 'prop-types'

import { Wrapper, Input, Label } from './Checkbox.styles'

const Checkbox = ({ label, disabled, name, checked, onChange }) => (
  <Wrapper>
    <Input
      type="checkbox"
      name={name}
      disabled={disabled}
      checked={checked}
      onChange={onChange}
    />
    <Label>{label}</Label>
  </Wrapper>
)

Checkbox.propTypes = {
  label: PropTypes.string,
  name: PropTypes.string,
  disabled: PropTypes.bool,
  checked: PropTypes.bool,
  onChange: PropTypes.func
}

export { Checkbox }
