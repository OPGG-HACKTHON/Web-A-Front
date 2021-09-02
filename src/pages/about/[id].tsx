import React from "react";
import { NextPage } from "next";

import client from "lib/customAxios";

import { PreviewCarousel } from "components/PreviewCarousel";
import { VideoCarousel } from "components/VideoCarousel";
import GameInfo from "components/About/GameInfo";

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
  return (
    <>
      <GameInfo {...{ item }} />;
      <VideoCarousel videos={item.movies} />
      <PreviewCarousel thumbnailList={item.screenshots} />
    </>
  );
};

AboutPage.getInitialProps = async (ctx) => {
  const id = ctx.query.id;

  const apiUrl = `/api/detail/${id}`;
  const res = await client.get(apiUrl);
  const {
    data: { data },
  } = res;

  return { item: data };
};

export default AboutPage;
