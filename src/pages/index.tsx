import React from "react";
import { NextPage } from "next";

import { PreviewCarousel } from "components/PreviewCarousel";
import { Carousel } from "components/Carousel";
import Roulette from "components/Main/Roulette";

const IndexPage: NextPage = () => {
  return (
    <>
      <Roulette />
    </>
  );
};

export default IndexPage;
