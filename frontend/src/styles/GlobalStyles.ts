import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    max-width: 1400px;
    margin: auto;
    overflow-x: hidden;
  }

  body, button, a, textarea, input {
    font-family: "Poppins", sans-serif;
  }
  
  a {
    text-decoration: none;
  }
`;
