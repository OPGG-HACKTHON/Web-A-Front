import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import { GetServerSideProps, NextPage } from "next";
import { useRouter } from "next/router";
import Head from "next/head";

import { pickType } from "components/Main/Carousel/Carousel";

import client, { updateLocale } from "lib/customAxios";

import Roulette from "components/Main/Roulette";
import RankingView from "components/RankingView";
import IndiPick from "../components/IndiPick/IndiPick";
import { Carousel } from "components/Main/Carousel";

import ReleasedIndieChip from "components/Main/ReleasedIndieChip/ReleasedIndieChip";
import ranking_list_dummy from "../components/RankingView/dummyDatas.json";
import indiPick_list_dummy from "../components/IndiPick/dummyDatas.json";

export interface IndexPageProps {
  recommendList: [pickType];
  rankingList: [
    {
      name: string;
      id: number;
      header_image: string;
    }
  ];
  indiPickList: [
    {
      name: string;
      id: number;
      like: number;
      header_image: string;
      genres: [string];
    }
  ];
}

const IndexPage: NextPage<IndexPageProps> = ({
  recommendList,
  indiPickList,
  rankingList,
}) => {
  const releasedIndieChips = recommendList.slice(4, 12);
  const { t } = useTranslation();
  const { locale } = useRouter();

  return (
    <>
      <Head>
        <title>{t("common_meta_title")}</title>
        <meta property="og:title" content={t("common_meta_title")} />
        <meta name="twitter:title" content={t("common_meta_title")} />
        <meta
          property="og:url"
          content={`http://d1f2tidsv8g9ke.cloudfront.net/${
            locale === "en" ? "en" : ""
          }`}
        />
        <meta name="description" content={t("common_meta_description")} />
        <meta
          property="og:description"
          content={t("common_meta_description")}
        />
        <meta
          name="twitter:description"
          content={t("common_meta_description")}
        />
        <meta property="og:image" content="/og.png" />
        <meta property="og:image:width" content="800" />
        <meta property="og:image:height" content="400" />

        <meta name="twitter:image" content="/og.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta property="og:type" content="website" />
      </Head>
      <Roulette />
      <Carousel {...{ recommendList, onScreenCount: 4 }} />
      <RankingView {...{ rankingList }} />
      <IndiPick {...{ indiPickList }} />
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
      indiPickList: indiPick_list_dummy,
      rankingList: ranking_list_dummy,
    },
  };
};

export default IndexPage;
