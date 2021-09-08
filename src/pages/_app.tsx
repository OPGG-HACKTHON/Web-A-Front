import App from "next/app";
import { appWithTranslation } from "next-i18next";
import { RecoilRoot } from "recoil";
import { ThemeProvider } from "styled-components";

import LocaleProvider from "components/LocaleProvider";
import Header from "components/Header";
import PageWrapper from "components/PageWrapper";
import GlobalStyle from "style/GlobalStyle";
import theme from "style/theme";

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;

    return (
      <LocaleProvider>
        <ThemeProvider {...{ theme }}>
          <RecoilRoot>
            <Header />
            <PageWrapper>
              <Component {...pageProps} />
            </PageWrapper>
            <GlobalStyle />
          </RecoilRoot>
        </ThemeProvider>
      </LocaleProvider>
    );
  }
}

export default appWithTranslation(MyApp);
