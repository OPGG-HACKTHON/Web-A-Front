import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { GetServerSideProps, NextPage } from "next";

import { pickType } from "components/Main/Carousel/Carousel";

import client, { updateLocale } from "lib/customAxios";

import Roulette from "components/Main/Roulette";
import Carousel from "components/Main/Carousel";
import ReleasedIndieChip from "components/Main/ReleasedIndieChip/ReleasedIndieChip";

export interface IndexPageProps {
  recommendList: [pickType];
}

const IndexPage: NextPage<IndexPageProps> = ({ recommendList }) => {
  const releasedIndieChips = recommendList.slice(4, 12);
  return (
    <>
      <Roulette />
      <Carousel {...{ recommendList, onScreenCount: 4 }} />
      <ReleasedIndieChip {...{ releasedIndieChips }} />
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async ({ locale }) => {
  updateLocale(locale);

  const apiUrl = `/api/home`;
  const res = await client.get(apiUrl);
  const {
    data: {
      data: { random_rec_list },
    },
  } = res;
  return {
    props: {
      ...(await serverSideTranslations(locale ?? "ko", ["common", "main"])),
      recommendList: random_rec_list,
    },
  };
};

export default IndexPage;
