import styled from 'styled-components'
import Button from '../Button'
import Icon from '../Icon'

export const Wrapper = styled.div`
  position: relative;
  display: inline-flex;
`

export const CloseBtn = styled(Button)`
  position: absolute;
  top: 0;
  right: 0;
`

export const MenuWrapper = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  z-index: 100;
  min-width: 7rem;
  padding: 1.6rem 0 0.8rem;
  background: var(--white);
  border-radius: 0.2rem;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);

  &.fade-in-up {
    &-enter {
      transform: translateY(10px);
      opacity: 0;
    }

    &-enter-active {
      transform: translateY(0);
      opacity: 1;
      transition: opacity 200ms, transform 200ms;
    }

    &-exit {
      transform: translateY(0);
      opacity: 1;
    }

    &-exit-active {
      transform: translateY(10px);
      opacity: 0;
      transition: opacity 200ms, transform 200ms;
    }
  }
`

export const Menu = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
`

export const MenuItem = styled.li`
  margin-bottom: 0.4rem;

  &:last-child {
    margin-bottom: 0;
  }
`

export const MenuBtn = styled.button`
  display: flex;
  gap: 0.2rem;
  align-items: center;
  width: 100%;
  padding: 0 0.8rem;
  color: var(--dark);
  font-weight: 300;
  font-size: 1rem;
  font-family: inherit;
  background: transparent;
  border: 0;
  cursor: pointer;
  transition: color 0.3s;

  @media (hover: hover) {
    &:not([disabled]):hover {
      color: var(--main);

      svg {
        fill: var(--main);
      }
    }
  }
`

export const MenuIcon = styled(Icon)`
  width: 1.4rem;
  height: 1.4rem;
  fill: var(--grey);
`
