import React from "react";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import { GetServerSideProps, NextPage } from "next";
import Head from "next/head";

import client, { updateLocale } from "lib/customAxios";

import { PreviewCarousel } from "components/About/PreviewCarousel";
import { VideoCarousel } from "components/About/VideoCarousel";
import { GameInfo } from "components/About/GameInfo";
import { useRouter } from "next/router";

export interface AboutPageProps {
  item: {
    id: number;
    name: string | null;
    short_description: string;
    header_image: string;
    release_date: string;
    genres: [string];
    screenshots: [string];
    movies: [string];
  };
}

const AboutPage: NextPage<AboutPageProps> = ({ item }) => {
  const { t } = useTranslation();
  const { locale } = useRouter();

  const { movies } = item;

  return (
    <>
      <Head>
        <title>{t("common_page_meta_title", { title: item.name })}</title>
        <meta
          property="og:title"
          content={t("common_page_meta_title", { title: item.name })}
        />
        <meta
          name="twitter:title"
          content={t("common_page_meta_title", { title: item.name })}
        />
        <meta
          property="og:url"
          content={`http://d1f2tidsv8g9ke.cloudfront.net/${
            locale === "en" ? "en" : ""
          }/about/${item.id}`}
        />
        <meta name="description" content={item.short_description} />
        <meta property="og:description" content={item.short_description} />
        <meta name="twitter:description" content={item.short_description} />
        <meta property="og:image" content={item.header_image} />
        <meta name="twitter:image" content={item.header_image} />

        <meta name="twitter:card" content="summary_large_image" />
        <meta property="og:type" content="website" />
      </Head>
      <GameInfo {...{ item }} />
      <VideoCarousel {...{ movies }} />
      <PreviewCarousel thumbnailList={item.screenshots} />
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async ({
  query,
  locale,
}) => {
  updateLocale(locale);
  const { id } = query;

  const apiUrl = `/api/detail/${id}`;
  const res = await client.get(apiUrl);
  const {
    data: { data },
  } = res;

  return {
    props: {
      ...(await serverSideTranslations(locale ?? "ko", ["common", "about"])),
      item: data,
    },
  };
};

export default AboutPage;
