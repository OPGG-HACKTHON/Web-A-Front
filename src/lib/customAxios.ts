import axios from "axios";

import server from "config/server";

const client = axios.create({
  baseURL: server,
});

client.defaults.headers = {
  "Cache-Control": "no-cache",
  Accept: "application/json",
  Pragma: "no-cache",
  Expires: "0",
};

export default client;
