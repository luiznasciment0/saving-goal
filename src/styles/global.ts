import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
  @font-face {
    font-family: 'Work Sans';
    font-style: normal;
    font-weight: 400;
    font-display: swap;
    src: local('Work Sans Regular'),
        url('/fonts/work-sans-v8-latin-regular.woff2') format('woff2');
  }
  @font-face {
    font-family: 'Work Sans';
    font-style: normal;
    font-weight: 600;
    font-display: swap;
    src: local('Work Sans SemiBold'),
        url('/fonts/work-sans-v8-latin-600.woff2') format('woff2');
  }
  @font-face {
    font-family: 'Rubik';
    font-style: normal;
    font-weight: 500;
    font-display: swap;
    src: local('Rubik SemiBold'),
        url('/fonts/rubik-v11-latin-500.woff2') format('woff2');
  }
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  html {
    font-size: 62.5%;
  }

  html, body, #__next {
    height: 100%;
  }

  body {
    font-family: 'Work Sans', 'Rubik', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif
  }
`

export default GlobalStyles
