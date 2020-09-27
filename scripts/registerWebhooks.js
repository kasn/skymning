const twitch = require("./util/twitch");
const get = require("lodash/get");
require("dotenv").config();

// of off script. runs locally
const streamer = [
  {
    id: 181687761,
    name: "floow93",
  },
];

async function load() {
  const subscriptions = await twitch.queryApi("webhooks/subscriptions");

  console.log("subcriptions", subscriptions);

  const hook = await twitch.queryApi("webhooks/hub", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      "hub.topic": "https://api.twitch.tv/helix/streams?user_id=181687761",
      "hub.mode": "subscribe",
      "hub.callback": "https://skymning.de/api/twitch",
    }),
  });
}

load();
