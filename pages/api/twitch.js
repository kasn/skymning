const fetch = require("node-fetch");
require("dotenv").config();

export default (req, res) => {
  console.log(
    "received request",
    req.method,
    JSON.stringify(req.query),
    req.body
  );

  if (req.method === "POST") {
    fetch(
      `https://api.vercel.com/v1/integrations/deploy/${process.env.DEPLOY_HOOK_SECRET}`
    );

    return;
  }

  if (req.query["hub.challenge"]) {
    return res.end(req.query["hub.challenge"]);
  }

  return res.end();
};
