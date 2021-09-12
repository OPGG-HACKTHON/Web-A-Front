import React from "react";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { GetServerSideProps, NextPage } from "next";

import client, { updateLocale } from "lib/customAxios";

import { PreviewCarousel } from "components/About/PreviewCarousel";
import { VideoCarousel } from "components/About/VideoCarousel";
import { GameInfo } from "components/About/GameInfo";

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
  const { movies } = item;
  return (
    <>
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
