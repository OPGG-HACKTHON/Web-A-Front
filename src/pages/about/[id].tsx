import React from "react";
import { NextPage } from "next";

import Axios from "axios";

type AboutPageProps = {
  item: {
    id: number;
    //...
  };
};

const AboutPage: NextPage<AboutPageProps> = ({ item }) => {
  return <h3>Game Info {item.id}</h3>;
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
