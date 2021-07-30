import React from "react";
import App from "next/app";
import { RecoilRoot } from "recoil";
import GlobalStyle from "style/GlobalStyle";
import { ThemeProvider } from "styled-components";
import theme from "style/theme";

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;

    return (
      <ThemeProvider {...{ theme }}>
        <RecoilRoot>
          <Component {...pageProps} />
          <GlobalStyle />
        </RecoilRoot>
      </ThemeProvider>
    );
  }
}

export default MyApp;
