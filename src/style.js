import styled from 'styled-components'

export const Layout = styled.div`
  display: grid;
  grid-gap: 20px;
  grid-template-areas:
    'header header'
    'b1 b3'
    'b2 b3'
    'footer footer';
  grid-template-rows: 80px 1fr 1fr 80px;
  grid-template-columns: repeat(2, 1fr);
  min-height: 100vh;
  padding: 20px;

  @media (max-width: 1200px) {
    grid-template-areas:
      'header'
      'footer'
      'b1'
      'b2'
      'b3';
    grid-template-rows: 80px 80px auto auto auto;
    grid-template-columns: 1fr;
    min-height: auto;
  }
`
