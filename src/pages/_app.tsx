import App from "next/app";
import { RecoilRoot } from "recoil";
import { ThemeProvider } from "styled-components";

import GlobalStyle from "style/GlobalStyle";
import theme from "style/theme";
import Header from "components/Header";
import PageWrapper from "components/PageWrapper";

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;

    return (
      <ThemeProvider {...{ theme }}>
        <RecoilRoot>
          <Header />
          <PageWrapper>
            <Component {...pageProps} />
          </PageWrapper>
          <GlobalStyle />
        </RecoilRoot>
      </ThemeProvider>
    );
  }
}

export default MyApp;
