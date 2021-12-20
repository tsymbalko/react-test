import React from 'react'
import PropTypes from 'prop-types'

import { Sprite } from './style'

import iconSpriteUrl from '../../../assets/sprites/icons.svg'

const Icon = ({ width, height, fill, name, className }) => {
  return (
    <Sprite
      viewBox="0 0 16 16"
      width={`${width}rem`}
      height={`${height}rem`}
      fill={fill}
      className={className}
    >
      <use xlinkHref={`${iconSpriteUrl}#${name}`} />
    </Sprite>
  )
}

Icon.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
  fill: PropTypes.string,
  className: PropTypes.string,
  name: PropTypes.oneOf(['more', 'edit', 'copy', 'close', 'delete', 'caution'])
}

Icon.defaultProps = {
  width: 1.6,
  height: 1.6,
  fill: 'currentColor',
  name: 'copy'
}

export default Icon
