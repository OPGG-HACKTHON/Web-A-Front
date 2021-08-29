import React from "react";
import { NextPage } from "next";

//500 에러 커스텀 페이지

type ErrorPageProps = {
  statusCode: number;
};

const Error: NextPage<ErrorPageProps> = ({ statusCode }) => {
  return <h1>Error: {statusCode}</h1>;
};

Error.getInitialProps = ({ res }) => {
  const statusCode = res?.statusCode || 500;

  return { statusCode };
};

export default Error;
