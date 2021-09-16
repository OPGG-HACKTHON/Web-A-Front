import Image from "next/image";
import dayjs from "dayjs";

import IReviewResult from "types/IReviewResult";

import star from "assets/images/review/star.svg";
import starFill from "assets/images/review/star_fill.svg";

import {
  ReviewItemName,
  ReviewItemWrapper,
  ReviewItemContent,
  ReviewItemContentTitle,
  ReviewItemContentText,
} from "./ReviewItem.style";

interface IReviewItemProps {
  item: IReviewResult;
}

const ReviewItem: React.FC<IReviewItemProps> = ({ item }) => {
  return (
    <ReviewItemWrapper>
      <ReviewItemName>anonymous</ReviewItemName>
      <ReviewItemContent>
        <ReviewItemContentTitle>
          <Image src={item.voted_up ? starFill : star} />
          <span>추천</span>
          <span>
            {dayjs(item.timestamp_created * 1000).format("YYYY-MM-DD")}
          </span>
        </ReviewItemContentTitle>
        <ReviewItemContentText>{item.review}</ReviewItemContentText>
      </ReviewItemContent>
    </ReviewItemWrapper>
  );
};

export default ReviewItem;
