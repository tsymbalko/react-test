import styled from 'styled-components'
import decal from './img/decal.svg'

export const Wrapper = styled.div`
  --accent-color: ${({ accentcolor }) => accentcolor};

  position: relative;
  display: flex;
  flex-direction: column;
  background: var(--grey-light);
  border-radius: 0 0 4px 4px;

  &::before {
    position: absolute;
    top: -0.3rem;
    right: 0;
    left: 0;
    height: 0.3rem;
    background-color: var(--accent-color);
    border-radius: 0.4rem 0.4rem 0 0;
    content: '';
  }
`

export const Header = styled.div`
  display: flex;
  flex: 0 0 auto;
  align-items: center;
  min-height: 3rem;
`
export const Icon = styled.div`
  top: 3px;
  left: 0;
  flex: 0 0 auto;
  width: 5.4rem;
  height: 3.1rem;
  padding: 0.3rem 0.3rem 0 0.4rem;
  background-color: var(--accent-color);
  background-repeat: no-repeat;
  background-size: 100% 100%;
  mask-image: url(${decal});
  mask-size: contain;
  mask-repeat: no-repeat;
`
export const Extra = styled.div`
  flex: 0 0 auto;
`
export const Title = styled.div`
  flex: 1 1 auto;
  padding: 0 1.2rem;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`

export const Body = styled.div`
  flex: 1 1 auto;
  padding: 1.2rem;
`

export const Footer = styled.div`
  display: flex;
  gap: 0.8rem;
  align-items: center;
  justify-content: flex-end;
  padding: 0 1.2rem 1.2rem;
`
