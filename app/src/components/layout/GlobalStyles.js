import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
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
    background-color: bisque;
    font-family: 'Inter', sans-serif;
    font-size: 1.8rem;
  }

  img {
    max-width: 100%;
  }
`

export default GlobalStyle
