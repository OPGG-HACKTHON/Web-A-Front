import React from "react";
import { NextPage } from "next";
import Axios from "axios";

import GameInfo from "components/About/GameInfo";

type AboutPageProps = {
  item: {
    id: number;
    //...
  };
};

const AboutPage: NextPage<AboutPageProps> = ({ item }) => {
  return (
    <>
      <GameInfo />
    </>
  );
};

AboutPage.getInitialProps = async (ctx) => {
  const id = ctx.query.id;

  //test API
  const apiUrl = `http://makeup-api.herokuapp.com/api/v1/products/${id}.json`;
  const res = await Axios.get(apiUrl);
  const data = res.data;

  return { item: data };
};

export default AboutPage;
