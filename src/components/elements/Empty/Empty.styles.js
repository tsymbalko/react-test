import styled, { css } from 'styled-components'

const blinkAnimationStyles = css`
  @keyframes blink {
    50% {
      opacity: 0;
    }
  }
`

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem;
`

export const Description = styled.p`
  font-size: 1.6rem;
`

export const Icon = styled.svg`
  display: block;
  max-width: 100%;
  fill: var(--grey-lightness);

  circle {
    animation-name: blink;
    animation-duration: 0.3s;
    animation-timing-function: linear;
    animation-iteration-count: infinite;
    fill: var(--main);
    ${blinkAnimationStyles}
  }
`
