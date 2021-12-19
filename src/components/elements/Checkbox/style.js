import styled from 'styled-components'

export const Wrapper = styled.label`
  display: inline-flex;
  align-items: center;
  cursor: pointer;
`

export const Input = styled.input`
  position: relative;
  width: 1rem;
  height: 1rem;
  margin: 0;
  background-color: var(--white);
  border: 1px solid var(--grey);
  border-radius: 0.2rem;
  cursor: pointer;
  transition: background-color 0.2s;
  appearance: none;

  &:disabled {
    cursor: not-allowed;
    opacity: 0.4;
  }

  &:focus-visible {
    outline: none;
    box-shadow: var(--base-focus);
  }

  &:checked {
    background-color: var(--main);
    border-color: var(--main);
  }

  &:hover:not(:disabled) {
    border-color: var(--base-hover);
  }

  &::after {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 0.3rem;
    height: 0.6rem;
    border: 0.1rem solid var(--white);
    border-top: 0;
    border-left: 0;
    transform: rotate(45deg) translate(-120%, -20%);
    opacity: 0;
    transition: all 0.2s;
    content: '';
    pointer-events: none;
  }

  &:checked::after {
    opacity: 1;
  }

  &:disabled + span {
    opacity: 0.4;
  }
`

export const Label = styled.span`
  margin-left: 0.4rem;
  color: var(--black);
  font-size: 1rem;
`
