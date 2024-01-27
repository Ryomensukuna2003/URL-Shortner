require("dotenv").config();
const express = require("express");
const urlRoute = require("./routes/url");
const { connecttoMongo } = require("./connect");
const URL = require("./models/url");
const app = express();
const PORT = 8000;

connecttoMongo(process.env.DB_LINK, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("DB connected Successfully");
  })
  .catch((err) => {
    console.log(err);
  });

app.use(express.json());
app.use("/url", urlRoute);

app.get("/:shortId", async (req, res) => {
  const shortId = req.params.shortId;
  const entry = await URL.findOneAndUpdate(
    {
      shortId,
    },
    {
      $push: {
        visitHistory: {
          timeStamp: Date.now(),
        },
      },
    }
  );
  res.redirect(entry.originalUrl);
});

app.listen(PORT, () => {
  console.log(`Server Started at: ${PORT}`);
});
