require("dotenv").config();
const get = require("lodash/get");
const fetch = require("node-fetch");
require("dotenv").config();

let token = null;

const getToken = async () => {
  const accessToken = await fetch(
    `https://id.twitch.tv/oauth2/token?client_id=${process.env.TWITCH_CLIENT_ID}&client_secret=${process.env.TWITCH_CLIENT_SECRET}&grant_type=client_credentials`,
    {
      method: "POST",
    }
  );

  const token = await accessToken.json();
  return get(token, "access_token");
};

const queryApi = async (endpoint, options = {}) => {
  const headers = get(options, "headers", {});
  const body = get(options, "body", null);
  const method = get(options, "method", "GET");

  if (token === null) {
    token = await getToken();
  }

  const requestOptions = {
    method,
    body,
    headers: {
      ...headers,
      "Client-Id": process.env.TWITCH_CLIENT_ID,
      Authorization: `Bearer ${token}`,
    },
  };

  const response = await fetch(
    `https://api.twitch.tv/helix/${endpoint}`,
    requestOptions
  );

  const responseBody = await response.text();

  if (responseBody !== undefined) {
    return [];
  }

  return get(JSON.parse(responseBody), "data", []);
};

module.exports = {
  getToken,
  queryApi,
};
