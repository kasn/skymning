"use strict";

const fs = require("fs");
const fetch = require("node-fetch");
const get = require("lodash/get");
require("dotenv").config();

async function queryApi(query) {
  const uri = `https://www.bungie.net/Platform/${query}`;

  const response = await fetch(uri, {
    headers: {
      "X-API-Key": process.env.BUNGIE_API_KEY,
    },
  });

  return await response.json();
}

async function load() {
  const data = await queryApi("GroupV2/2131814/Members/");

  let members = data.Response.results.map(async (member) => {
    const details = await queryApi(
      `Destiny2/${member.destinyUserInfo.membershipType}/Profile/${member.destinyUserInfo.membershipId}/?components=200`
    );

    const characters = get(details, "Response.characters.data");

    let teammate = {
      name: member.destinyUserInfo.LastSeenDisplayName
        ? member.destinyUserInfo.LastSeenDisplayName
        : member.destinyUserInfo.displayName,
      type: member.destinyUserInfo.membershipType,
      id: member.destinyUserInfo.membershipId,
      joinDate: member.joinDate,
      characters: Object.values(characters).map((character) => {
        return {
          emblemPath: character.emblemPath,
          emblemBackgroundPath: character.emblemBackgroundPath,
          emblemHash: character.emblemHash,
          emblemColor: character.emblemColor,
          guardianClass: character.classType,
        };
      }),
    };

    return teammate;
  });

  members = await Promise.all(members);

  fs.writeFileSync(
    `${__dirname}/../generated/members.json`,
    JSON.stringify(members, null, 2),
    {
      flag: "w",
    }
  );
}

load();
