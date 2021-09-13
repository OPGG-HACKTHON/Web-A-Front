import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { GetServerSideProps, NextPage } from "next";

import { pickType } from "components/Main/Carousel/Carousel";

import client, { updateLocale } from "lib/customAxios";

import Roulette from "components/Main/Roulette";
import Carousel from "components/Main/Carousel";
import RankingView from "components/RankingView";

import ranking_list_dummy from "../components/RankingView/dummyDatas.json";

export interface IndexPageProps {
  recommendList: [pickType];
  rankingList: [
    {
      name: string;
      id: number;
      header_image: string;
    }
  ];
}

const IndexPage: NextPage<IndexPageProps> = ({
  recommendList,
  rankingList,
}) => {
  return (
    <>
      <Roulette />
      <Carousel {...{ recommendList, onScreenCount: 4 }} />
      <RankingView {...{ rankingList }} />
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
      rankingList: ranking_list_dummy,
    },
  };
};

export default IndexPage;
