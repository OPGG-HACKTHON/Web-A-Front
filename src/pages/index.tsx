import React from "react";

import { Carousel } from "components/Carousel";
import { NextPage } from "next";

export type dataType = {
  id: number;
  title: string;
  thumbnail: string;
  tag: Array<string>;
};

const datas: Array<dataType> = [
  {
    id: 1,
    title: "hi",
    thumbnail: "https://picsum.photos/1000?random=1",
    tag: ["hihi2", "hihi"],
  },
  {
    id: 2,
    title: "hi2",
    thumbnail: "https://picsum.photos/1000?random=2",
    tag: ["hihi2", "hihi"],
  },
  {
    id: 3,
    title: "hi3",
    thumbnail: "https://picsum.photos/1000?random=3",
    tag: ["hihi2", "hihi"],
  },
  {
    id: 4,
    title: "hi3",
    thumbnail: "https://picsum.photos/1000?random=4",
    tag: ["hihi2", "hihi"],
  },
  {
    id: 5,
    title: "hi3",
    thumbnail: "https://picsum.photos/1000?random=5",
    tag: ["hihi2", "hihi"],
  },
  {
    id: 6,
    title: "hi3",
    thumbnail: "https://picsum.photos/1000?random=6",
    tag: ["hihi2", "hihi"],
  },
  {
    id: 7,
    title: "hi3",
    thumbnail: "https://picsum.photos/1000?random=7",
    tag: ["hihi2", "hihi"],
  },
  {
    id: 8,
    title: "hi3",
    thumbnail: "https://picsum.photos/1000?random=8",
    tag: ["hihi2", "hihi"],
  },
  {
    id: 9,
    title: "hi3",
    thumbnail: "https://picsum.photos/1000?random=9",
    tag: ["hihi2", "hihi"],
  },
  {
    id: 10,
    title: "hi3",
    thumbnail: "https://picsum.photos/1000?random=10",
    tag: ["hihi2", "hihi"],
  },
  {
    id: 11,
    title: "hi3",
    thumbnail: "https://picsum.photos/1000?random=11",
    tag: ["hihi2", "hihi"],
  },
];

const IndexPage: NextPage = () => {
  return (
    <>
      <Carousel {...{ datas }} onScreenCount={4} />
    </>
  );
};

export default IndexPage;
