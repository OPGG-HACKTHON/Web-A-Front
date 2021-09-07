import App from "next/app";
import { appWithTranslation } from "next-i18next";
import { RecoilRoot } from "recoil";
import { ThemeProvider } from "styled-components";

import { updateLocale } from "lib/customAxios";

import Header from "components/Header";
import PageWrapper from "components/PageWrapper";
import GlobalStyle from "style/GlobalStyle";
import theme from "style/theme";

class MyApp extends App {
  componentDidMount() {
    updateLocale(this.props.router.locale);
  }

  componentDidUpdate(prevProps: typeof this.props) {
    if (this.props.router.locale !== prevProps.router.locale) {
      updateLocale(this.props.router.locale);
    }
  }

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

export default appWithTranslation(MyApp);
