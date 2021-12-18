import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
:root {
  --grey: #70707b;
  --main: #0080ff;
  --white: #fff;
  --black: #000;
  --dark: #10111d;
  --base-scroll: #a4a4a4;
}

html {
  box-sizing: border-box;
  height: 100%; /* -moz-available surprisingly doesn't work in FF, so we need to use 100% instead */
  height: -webkit-fill-available; /* For desktop Webkit we need to add height: stretch to html */
  overflow-y: scroll;
  overscroll-behavior-y: none;
  color: var(--black);
  font-weight: 400;
  font-family:
    'Mulish',
    -apple-system,
    BlinkMacSystemFont,
    'Segoe UI',
    'Roboto',
    'Oxygen',
    'Ubuntu',
    'Helvetica Neue',
    Arial,
    sans-serif,
    'Apple Color Emoji',
    'Segoe UI Emoji',
    'Segoe UI Symbol';
  background-color: var(--white);
  color-scheme: light dark;
  scroll-behavior: smooth;
}

*,
*::before,
*::after {
  box-sizing: inherit;
}

body {
  margin: 0;
  line-height: 1.7;
}

/* custom scroll only web-kit browsers */
::-webkit-scrollbar {
  width: 0.25rem;
  height: 0.25rem;
}

/* Track */
::-webkit-scrollbar-track {
  display: none;
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: var(--base-scroll);
  border-radius: 0.25rem;
}
`

export default GlobalStyle
