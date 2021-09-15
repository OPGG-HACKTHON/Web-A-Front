import React, { useEffect, useState } from "react";
import { useTranslation } from "next-i18next";
import Link from "next/link";
import Image from "next/image";

import LikeIcon from "assets/images/like.svg";

import {
  IndiPickWrapper,
  IndiPickContainer,
  IndiPickHeader,
  IndiPickContents,
  IndiPickVersus,
  //
  IndiPickItemWrapper,
  IndiPickLikeBox,
  IndiPickLikeBoxContainer,
  IndiPickLikeBoxBottom,
  IndiPickItemBox,
  //
  IndiPickItemBoxImg,
  IndiPickItemBoxContents,
  IndiPickItemBoxName,
  IndiPickItemBoxGenres,
  IndiPickItemGenre,
} from "./IndiPick.style";

interface IndiPickItemProps {
  name: string;
  id: number;
  like: number;
  header_image: string;
  genres: [string];
  isLeft: boolean;
  btnState: string;
  onClick: (id: number) => void;
}
interface IndiPickProps {
  indiPickList: [
    {
      name: string;
      id: number;
      like: number;
      header_image: string;
      genres: [string];
    }
  ];
}

const IndiPckItem = ({
  name,
  id,
  like,
  header_image,
  genres,
  isLeft,
  btnState,
  onClick,
}: IndiPickItemProps) => {
  const handleClick = () => onClick(id);
  const [num, setNum] = useState<number>(like);

  useEffect(() => {
    setNum(like);
  }, [like]);
  return (
    <IndiPickItemWrapper isLeft={isLeft}>
      <IndiPickLikeBox btnState={btnState} onClick={handleClick}>
        {btnState === "default" ? (
          <IndiPickLikeBoxContainer>
            <h4>Click!</h4>
            <IndiPickLikeBoxBottom>
              <Image src={LikeIcon} height={16} width={16} />
              <p>{num}</p>
            </IndiPickLikeBoxBottom>
          </IndiPickLikeBoxContainer>
        ) : btnState === "active" ? (
          <IndiPickLikeBoxContainer>
            <h2>Like</h2>
            <IndiPickLikeBoxBottom>
              <Image src={LikeIcon} height={16} width={16} />
              <p>{num}</p>
            </IndiPickLikeBoxBottom>
          </IndiPickLikeBoxContainer>
        ) : (
          <IndiPickLikeBoxContainer>
            <p>
              Vote <br /> Complete
            </p>
          </IndiPickLikeBoxContainer>
        )}
      </IndiPickLikeBox>

      <Link href={`/about/${id}`}>
        {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
        <a>
          <IndiPickItemBox isLeft={isLeft}>
            <IndiPickItemBoxImg img={header_image} />
            <IndiPickItemBoxContents>
              <IndiPickItemBoxName>{name}</IndiPickItemBoxName>
              <IndiPickItemBoxGenres>
                {genres.map((genre: string) => (
                  <IndiPickItemGenre key={genre}>{genre}</IndiPickItemGenre>
                ))}
              </IndiPickItemBoxGenres>
            </IndiPickItemBoxContents>
          </IndiPickItemBox>
        </a>
      </Link>
    </IndiPickItemWrapper>
  );
};
const IndiPick = ({ indiPickList }: IndiPickProps) => {
  const items = [...indiPickList];

  const { t } = useTranslation("main");
  const [pickState, setPickState] = useState([
    { id: items[0].id, state: "default", like: items[0].like },
    { id: items[1].id, state: "default", like: items[1].like },
  ]);

  const onClick = (id: number) => {
    setPickState(
      pickState.map((obj) =>
        obj.id === id
          ? { ...obj, state: "active", like: obj.like + 1 }
          : { ...obj, state: "inactive" }
      )
    );
  };

  return (
    <IndiPickWrapper>
      <IndiPickContainer>
        <IndiPickHeader>{t("main_indi_pick_title")}</IndiPickHeader>

        <IndiPickContents>
          <IndiPckItem
            name={items[0].name}
            id={items[0].id}
            header_image={items[0].header_image}
            genres={items[0].genres}
            isLeft={true}
            like={pickState[0].like}
            btnState={pickState[0].state}
            onClick={onClick}
          />
          <IndiPickVersus>VS</IndiPickVersus>
          <IndiPckItem
            name={items[1].name}
            id={items[1].id}
            header_image={items[1].header_image}
            genres={items[1].genres}
            isLeft={false}
            like={pickState[1].like}
            btnState={pickState[1].state}
            onClick={onClick}
          />
        </IndiPickContents>
      </IndiPickContainer>
    </IndiPickWrapper>
  );
};

export default IndiPick;
