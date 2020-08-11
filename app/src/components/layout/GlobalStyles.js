import { createGlobalStyle } from 'styled-components'
import 'typeface-inter'

const GlobalStyle = createGlobalStyle`
  :root {
    --primary: #fcd5ce;
    --font: 'Inter', sans-serif;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html, body {
    height: 100%;
  }

  html {
    font-size: 62.5%;
    -webkit-font-smoothing: antialiased;
  }

  body {
    color: #1a2a3a;
    font-family: var(--font);
    font-size: 1.8rem;
  }

  img {
    max-width: 100%;
  }
`

export default GlobalStyle
