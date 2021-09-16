import axios from "axios";

const client = axios.create({
  baseURL: process.env.NEXT_PUBLIC_SERVER_URL,
});

client.defaults.headers = {
  "Cache-Control": "no-cache",
  "Accept-Language": "ko-KR",
  Accept: "application/json",
  Pragma: "no-cache",
  Expires: "0",
};

export default client;

export const updateLocale = (locale: string | undefined) => {
  const lang = locale === "en" ? "en-US" : "ko-KR";
  client.defaults.headers["Accept-Language"] = lang;
};
