import styled from 'styled-components'
import { maxWidth } from 'styled-system'

import Button from '../Button'

export const Wrapper = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 5000;
  display: flex;
  flex-direction: column;
  padding: 1rem;
  overflow-x: hidden;
  overflow-y: auto;
  scroll-behavior: smooth;

  &::before {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: var(--dark);
    opacity: 0.3;
    content: '';
  }
`

export const Content = styled.div`
  --indent: 1.6rem;

  position: relative;
  width: 100%;
  margin: auto;
  background: var(--white);
  border-radius: 0.4rem;
  transform-origin: 50% 0;
  ${maxWidth}
`

export const Header = styled.header`
  display: flex;
  gap: 1rem;
  align-items: center;
  justify-content: space-between;
  padding: calc(var(--indent) / 2) var(--indent);
  border-bottom: 0.1rem solid var(--dark-light);
`

export const Title = styled.p`
  margin: 0;
  overflow: hidden;
  color: var(--black);
  font-size: 1.8rem;
  line-height: 1.5;
  white-space: nowrap;
  text-overflow: ellipsis;
`

export const Body = styled.div`
  padding: var(--indent);
`

export const Footer = styled.footer`
  position: relative;
  display: flex;
  gap: 1.6rem;
  align-items: center;
  justify-content: flex-end;
  padding: var(--indent);

  &::before {
    position: absolute;
    top: 0;
    right: var(--indent);
    left: var(--indent);
    border-top: 0.1rem solid var(--dark-light);
    content: '';
  }
`

export const Close = styled(Button)`
  margin-left: auto;
`
