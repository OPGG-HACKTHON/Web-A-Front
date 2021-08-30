import React from "react";
import Axios from "axios";
import { NextPage } from "next";

import server from "config/server";
import { PreviewCarousel } from "components/PreviewCarousel";
import { VideoCarousel } from "components/VideoCarousel";

type AboutPageProps = {
  item: {
    id: number;
    name: string;
    short_description: string;
    header_image: string;
    release_date: string;
    genres: Array<string>;
    screenshots: Array<string>;
    movies: Array<string>;
  };
};

const AboutPage: NextPage<AboutPageProps> = ({ item }) => {
  return (
    <>
      <VideoCarousel videos={item.movies} />
      <PreviewCarousel thumbnailList={item.screenshots} />
    </>
  );
};

AboutPage.getInitialProps = async (ctx) => {
  const id = ctx.query.id;

  //test API
  const apiUrl = `${server}/api/detail/${id}`;
  const res = await Axios.get(apiUrl);
  const {
    data: { data },
  } = res;

  return { item: data };
};

export default AboutPage;
