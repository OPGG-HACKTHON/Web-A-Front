import { createGlobalStyle } from "styled-components";
import reset from "./reset";

const GlobalStyle = createGlobalStyle`
  ${reset}
  
  * {
    box-sizing: border-box;
  }

  body {
    font-size: 10px;
    font-family: 'Spoqa Han Sans Neo', 'sans-serif';
  }
`;

export default GlobalStyle;
