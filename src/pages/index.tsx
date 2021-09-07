import React from "react";
import { NextPage } from "next";

import { pickType } from "components/Main/Carousel/Carousel";

import client from "lib/customAxios";

import Roulette from "components/Main/Roulette";
import Carousel from "components/Main/Carousel";

export interface IndexPageProps {
  recommendList: [pickType];
}

const IndexPage: NextPage<IndexPageProps> = ({ recommendList }) => {
  return (
    <>
      <Roulette />
      <Carousel {...{ recommendList, onScreenCount: 4 }} />
    </>
  );
};

IndexPage.getInitialProps = async () => {
  const apiUrl = `/api/home`;
  const res = await client.get(apiUrl);
  const {
    data: {
      data: { random_rec_list },
    },
  } = res;

  return { recommendList: random_rec_list };
};

export default IndexPage;
