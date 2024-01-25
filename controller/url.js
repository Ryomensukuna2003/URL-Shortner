const shortid = require('shortid');
const URL = require("../models/url");

async function handleGenarateShortURL(req, res) {
  const body = req.body;
  if (!body.url) return res.status(400).json({ err: "URL is Required" });
  const ShortID = shortid();
  await URL.create({
    shortId: ShortID,
    originalUrl: body.url,
    visitHistory: [],
  });

  return res.json({ id: ShortID });
}

module.exports = {
  handleGenarateShortURL,
};
