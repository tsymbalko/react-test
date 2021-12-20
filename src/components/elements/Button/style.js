import styled, { css } from 'styled-components'
import Icon from '../Icon'

const primaryBtnStyles = css`
  color: var(--white);
  background-color: var(--main);

  @media (hover: hover) {
    &:not([disabled]):hover {
      background-color: var(--base-hover);
    }
  }

  &:disabled {
    background-color: var(--grey-light);
    border-color: var(--grey);
  }
`

const secondaryBtnStyles = css`
  color: var(--dark);
  border-color: var(--grey-lightness);

  @media (hover: hover) {
    &:not([disabled]):hover {
      color: var(--base-hover);
      border-color: var(--base-hover);
    }
  }

  &:disabled {
    background-color: var(--grey-light);
  }
`

const ghostBtnStyles = css`
  color: var(--grey);
  border-color: transparent;

  @media (hover: hover) {
    &:not([disabled]):hover {
      color: var(--base-hover);
    }
  }
`

const squareBtnStyles = css`
  min-width: var(--size);
  padding: 0;

  span {
    position: absolute;
    width: 1px;
    height: 1px;
    overflow: hidden;
    white-space: nowrap;
    clip: rect(1px, 1px, 1px, 1px);
  }
`

const rectangleBtnStyles = css`
  min-width: 10rem;
`

export const Btn = styled.button`
  --size: ${({ size }) => `${size}rem`};

  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  height: var(--size);
  padding: 0.3rem;
  font-family: inherit;
  white-space: nowrap;
  vertical-align: middle;
  background-color: transparent;
  border: 0.1rem solid transparent;
  border-radius: 0.2rem;
  cursor: pointer;
  transition: color 0.2s, background-color 0.2s, border-color 0.2s;
  ${({ variant }) => {
    if (variant === 'primary') {
      return primaryBtnStyles
    }
    if (variant === 'secondary') {
      return secondaryBtnStyles
    }
    if (variant === 'ghost') {
      return ghostBtnStyles
    }
  }}
  ${({ shape }) => {
    if (shape === 'square') {
      return squareBtnStyles
    }
    if (shape === 'rectangle') {
      return rectangleBtnStyles
    }
  }}

  &:disabled {
    color: var(--grey);
    cursor: not-allowed;
    opacity: 0.4;
  }
`

export const BtnIcon = styled(Icon)`
  width: calc(var(--size) - 0.4rem);
  height: calc(var(--size) - 0.4rem);
`

export const BtnText = styled.span`
  padding: 0.1rem 0.3rem 0;
  color: currentColor;
  font-size: 1rem;
  line-height: 1;
  text-transform: uppercase;
`
