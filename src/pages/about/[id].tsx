import { NextPage } from "next";
import Axios from "axios";

import GameInfo from "components/About/GameInfo";

export interface AboutPageProps {
  item: {
    id: number;
    name: any;
    short_description: string;
    header_image: string;
    release_date: string;
    genres: [];
    screenshots: [];
    movies: [];
  };
}

const AboutPage: NextPage<AboutPageProps> = ({ item }) => {
  return <GameInfo item={item} />;
};

AboutPage.getInitialProps = async (ctx) => {
  const id = ctx.query.id;

  const apiUrl = `http://3.13.108.233:8080/api/detail/${id}`;
  const res = await Axios.get(apiUrl);
  const data = res.data.data;

  return { item: data };
};

export default AboutPage;
