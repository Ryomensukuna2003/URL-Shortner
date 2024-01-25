const express = require("express");
const router = express.Router();
const { handleGenarateShortURL } = require("../controller/url");

router.post("/", handleGenarateShortURL);

module.exports = router;
