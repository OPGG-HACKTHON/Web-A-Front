import { createGlobalStyle } from "styled-components";
import reset from "./reset";

const GlobalStyle = createGlobalStyle`
  ${reset}
  
  * {
    box-sizing: border-box;
  }
  html {
    font-size: 10px; 
    font-family: 'Spoqa Han Sans Neo', 'sans-serif';
  }

  body {
    min-width: 1024px;
  }
`;

export default GlobalStyle;
