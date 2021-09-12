import React from "react";
import { GetServerSideProps, NextPage } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

import { Error } from "components/Error";

import { updateLocale } from "lib/customAxios";

export interface ErrorPageProps {
  statusCode: number;
}

const ErrorPage: NextPage<ErrorPageProps> = ({ statusCode }) => {
  return <Error statusCode={statusCode} />;
};

export const getServerSideProps: GetServerSideProps = async ({
  locale,
  res,
}) => {
  const statusCode = res?.statusCode || 500;
  updateLocale(locale);

  return {
    props: {
      ...(await serverSideTranslations(locale ?? "ko", ["error"])),
      statusCode: statusCode,
    },
  };
};

export default ErrorPage;
