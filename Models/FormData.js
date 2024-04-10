const mongoose = require("mongoose");

const formDataSchema = new mongoose.Schema(
  {
    name: String,
  },
  {
    versionKey: false,
  }
);

module.exports = mongoose.model("FormData", formDataSchema);
