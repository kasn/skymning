"use strict";

const fs = require("fs");
const fetch = require("node-fetch");
require("dotenv").config();

async function load() {
  const query = await fetch(
    "https://www.bungie.net/Platform/GroupV2/2131814/Members/",
    {
      headers: {
        "X-API-Key": process.env.BUNGIE_API_KEY,
      },
    }
  );
  const data = await query.json();
  const members = data.Response.results.map((member) => {
    let teammate = {
      name: member.destinyUserInfo.displayName,
      type: member.destinyUserInfo.membershipType,
      id: member.destinyUserInfo.membershipId,
      joinDate: member.joinDate,
    };

    if (typeof member.bungieNetUserInfo != "undefined") {
      teammate.iconPath = member.bungieNetUserInfo.iconPath;
    }
    return teammate;
  });

  fs.writeFileSync(
    `${__dirname}/../generated/members.json`,
    JSON.stringify(members),
    {
      flag: "w",
    }
  );
}

load();
