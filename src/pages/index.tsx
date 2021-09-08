import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { GetServerSideProps, NextPage } from "next";

import Roulette from "components/Main/Roulette";

const IndexPage: NextPage = () => {
  return (
    <>
      <Roulette />
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale ?? "ko", ["common", "main"])),
    },
  };
};

export default IndexPage;
