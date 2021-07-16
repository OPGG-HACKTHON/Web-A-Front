import React from "react";
import App from "next/app";
import { RecoilRoot } from "recoil";
import GlobalStyle from "style/GlobalStyle";

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;

    return (
      <RecoilRoot>
        <Component {...pageProps} />
        <GlobalStyle />
      </RecoilRoot>
    );
  }
}

export default MyApp;
