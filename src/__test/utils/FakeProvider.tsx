import { RecoilRoot } from "recoil";

import { ThemeProvider } from "styled-components";

import GlobalStyle from "style/GlobalStyle";
import theme from "style/theme";

const FakeProvider: React.FC = ({ children }) => {
  return (
    <ThemeProvider {...{ theme }}>
      <RecoilRoot>
        {children}
        <GlobalStyle />
      </RecoilRoot>
    </ThemeProvider>
  );
};

export default FakeProvider;
