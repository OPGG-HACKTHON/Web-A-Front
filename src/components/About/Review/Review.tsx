import { useTranslation } from "next-i18next";

import { IndexTitle } from "components/IndexTitle";
import { ReviewItem } from "./ReviewItem";

import { ReviewContent, ReviewWrapper, WholeContainer } from "./Review.style";
import { NotExist } from "components/NotExist";
import IReviewResult from "types/IReviewResult";

interface IReviewProps {
  id: number;
}

const mock = [
  {
    recommendationid: "",
    author: { steamid: "" },
    review: "진짜 핵이 너무 많음.",
    timestamp_created: 1631123234,
    voted_up: false,
  },
  {
    recommendationid: "",
    author: { steamid: "" },
    review:
      "This game is older than half of the steam community users, love it.",
    timestamp_created: 1631273637,
    voted_up: true,
  },
  {
    recommendationid: "",
    author: { steamid: "" },
    review: "굿",
    timestamp_created: 1631273637,
    voted_up: true,
  },
];

const Review: React.FC<IReviewProps> = () => {
  const { t } = useTranslation("about");

  const data: IReviewResult[] = [];

  return (
    <ReviewWrapper>
      <WholeContainer>
        <IndexTitle withoutIndex title={t("about_review_title")} />
        <ReviewContent>
          {data.length ? (
            <>
              {data.map((v, i) => (
                <ReviewItem key={i} item={v} />
              ))}
            </>
          ) : (
            <NotExist
              style={{ borderRadius: "10px" }}
              text={t("about_review_not_exist")}
            />
          )}
        </ReviewContent>
      </WholeContainer>
    </ReviewWrapper>
  );
};

export default Review;
