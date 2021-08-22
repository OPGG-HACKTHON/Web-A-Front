import React from "react";
import { NextPage, NextPageContext } from "next";

import Axios from "axios";

export type AboutPageProps = {
  item: {
    id: number;
  };
};

const AboutPage: NextPage<AboutPageProps> = ({ item }) => {
  console.log(item);
  return <>hi {item.id}</>;
};

interface Context extends NextPageContext {
  // any modifications to the default context, e.g. query types
}

AboutPage.getInitialProps = async (ctx: Context) => {
  const id = ctx.query.id;
  const apiUrl = `http://makeup-api.herokuapp.com/api/v1/products/${id}.json`;
  const res = await Axios.get(apiUrl);
  const data = res.data;

  return { item: data };
};

export default AboutPage;
