// This is for Models of how Data is stored in DB
// Created a Schema and passed into a model
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema(
  {
    shortId: {
      type: String,
      require: true,
      unique: true,
    },
    originalUrl: {
      type: String,
      require: true,
    },
    visitHistory: [{ timeStamp: { type: Number } }],
  },
  { timestamps: true }
);
const URL = mongoose.model("url", userSchema);

module.exports =URL;
