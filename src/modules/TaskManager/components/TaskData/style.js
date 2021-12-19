import styled from 'styled-components'
import Paragraph from '../../../../components/elements/Paragraph'

export const Wrapper = styled.div`
  display: flex;
  gap: 0.8rem;
  align-items: flex-start;
  overflow: hidden;

  & + & {
    margin-top: 0.8rem;
  }
`

export const Content = styled.div`
  flex: 1 1 auto;
  overflow: hidden;
`

export const Row = styled.div`
  display: flex;
  gap: 0.8rem;
  align-items: flex-start;
`

export const Title = styled(Paragraph)`
  flex: 0 0 auto;
  min-width: 4.4rem;
`

export const Text = styled(Paragraph)`
  overflow: hidden;
  color: var(--grey);
  white-space: nowrap;
  text-overflow: ellipsis;
`

export const Value = styled(Paragraph)`
  flex: 0 0 auto;
`
