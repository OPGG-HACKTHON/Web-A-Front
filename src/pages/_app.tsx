import React from "react";
import App from "next/app";
import { RecoilRoot } from "recoil";

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;

    return (
      <RecoilRoot>
        <Component {...pageProps} />
      </RecoilRoot>
    );
  }
}

export default MyApp;
