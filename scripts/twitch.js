const fetch = require("node-fetch");
const fs = require("fs");
const twitch = require("./util/twitch");
const get = require("lodash/get");

require("dotenv").config();

async function load() {
  const token = await twitch.getToken();

  const clanList = ["eiganjo161", "floow93", "mr_shanxz", "fettgotttony"];
  //   const clanList = ["GernaderJake", "Amouranth"];

  const requestParams = clanList.map(
    (item) => `user_login=${encodeURIComponent(item)}`
  );

  const data = await fetch(
    // `https://api.twitch.tv/helix/streams?${requestParams.join("&")}`,
    `https://api.twitch.tv/helix/search/channels?query=floow93`,
    {
      headers: {
        "Client-Id": process.env.TWITCH_CLIENT_ID,
        Authorization: `Bearer ${token}`,
      },
    }
  );

  console.log(data);

  // console.log(await data.json());
  /*
  const streamer = await data.json();

  fs.writeFileSync(
    `${__dirname}/../generated/live.json`,
    JSON.stringify(get(streamer, "data"), null, 2),
    {
      flag: "w",
    }
  );
  */
}

load();

//or6ed8dsibjl2uum3suidzw61lehp7;
