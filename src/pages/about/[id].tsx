import React from "react";
import { useRouter } from "next/router";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import { GetServerSideProps, NextPage } from "next";
import Head from "next/head";

import client, { updateLocale } from "lib/customAxios";

import { PreviewCarousel } from "components/About/PreviewCarousel";
import { VideoCarousel } from "components/About/VideoCarousel";
import { GameInfo } from "components/About/GameInfo";
import { Carousel } from "components/Main/Carousel";
import { useAxios } from "hooks/useAxios";
import { Review } from "components/About/Review";

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

  const { response, loading, error } = useAxios({
    url: "/api/home",
    method: "get",
  });

  if (loading) return null;
  if (error) {
    console.log(error);
    return null;
  }

  const {
    data: { random_rec_list },
  } = response;

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
      <Review id={item.id} />
      <Carousel
        aboutPage
        {...{ recommendList: random_rec_list, onScreenCount: 4 }}
      />
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
