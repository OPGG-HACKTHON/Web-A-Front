const { i18n } = require("./next-i18next.config");

module.exports = {
  target: "serverless",
  images: {
    domains: ["cdn.akamai.steamstatic.com"],
  },
  i18n,
};
