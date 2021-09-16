export default interface IReviewResult {
  recommendationid: string;
  author: {
    steamid: string;
  };
  review: string;
  timestamp_created: number;
  voted_up: boolean;
}
