import { useTranslation } from "next-i18next";
import Link from "next/link";
import Image from "next/image";

import LikeIcon from "assets/images/like.svg";

import {
  IndiPickWrapper,
  IndiPickContainer,
  IndiPickHeader,
  IndiPickContents,
  IndiPickVS,
  //
  IndiPickItemWrapper,
  IndiPickLikeBox,
  IndiPickLikeBoxBottom,
  IndiPickItemBox,
  //
  IndiPickItemBoxImg,
  IndiPickItemBoxContents,
  IndiPickItemBoxName,
  IndiPickItemBoxGenres,
  IndiPickItemGenre,
} from "./IndiPick.style";

type ItemType = {
  name: string;
  id: number;
  like: number;
  header_image: string;
  genres: [string];
  isLeft?: boolean;
  isActive?: boolean;
};
interface IndiPickProps {
  indiPickList: [ItemType];
}

const IndiPckItem = ({
  name,
  id,
  like,
  header_image,
  genres,
  isLeft,
  isActive,
}: ItemType) => {
  console.log(isLeft);
  return (
    <IndiPickItemWrapper isLeft={isLeft}>
      <IndiPickLikeBox isActive={isActive}>
        {isActive ? (
          <>
            <h2>Like</h2>
            <IndiPickLikeBoxBottom>
              <Image src={LikeIcon} height={16} width={16} />
              <p>{like}</p>
            </IndiPickLikeBoxBottom>
          </>
        ) : (
          <p>
            Vote <br /> Complete
          </p>
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
  const { t } = useTranslation("main");
  const items = [...indiPickList];

  return (
    <IndiPickWrapper>
      <IndiPickContainer>
        <IndiPickHeader>{t("main_indi_pick_title")}</IndiPickHeader>

        <IndiPickContents>
          <IndiPckItem
            name={items[0].name}
            id={items[0].id}
            like={items[0].like}
            header_image={items[0].header_image}
            genres={items[0].genres}
            isLeft={true}
            isActive={true}
          />
          <IndiPickVS>VS</IndiPickVS>
          <IndiPckItem
            name={items[1].name}
            id={items[1].id}
            like={items[1].like}
            header_image={items[1].header_image}
            genres={items[1].genres}
            isLeft={false}
            isActive={false}
          />
        </IndiPickContents>
      </IndiPickContainer>
    </IndiPickWrapper>
  );
};

export default IndiPick;
