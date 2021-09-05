import axios from "axios";

const client = axios.create({
  baseURL: process.env.SERVER_URL,
});

client.defaults.headers = {
  "Cache-Control": "no-cache",
  "Accept-Language": "ko-KR",
  Accept: "application/json",
  Pragma: "no-cache",
  Expires: "0",
};

export default client;
