import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  body {
    background: #fff;
    color: #333;
    -webkit-font-smoothing: antialiased;
    overflow-x: hidden;
  }

  body, #root {
    height: 100vh;
  }

  body, input, button {
    font-family: 'Roboto', serif;
    font-size: 16px;
  }

  h1, h2, h3, h4, h5, h6, strong {
    font-weight: 500;
  }

  button {
    cursor: pointer;
  }

  :root {
    --primary: #6200EE;
    --secundary: #1D096B;
  }
`;
