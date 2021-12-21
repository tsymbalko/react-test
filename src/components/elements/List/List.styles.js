import styled from 'styled-components'
import { space, flexDirection } from 'styled-system'

export const Wrapper = styled.ul`
  display: flex;
  gap: ${({ gap }) => gap};
  margin: 0;
  padding: 0;
  list-style: none;
  ${space}
  ${flexDirection}
`

export const Item = styled.li`
  display: inline-flex;
  flex: 0 0 auto;
`
