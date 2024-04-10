const mongoose = require("mongoose");

const CountDataSchema = new mongoose.Schema(
  {
    addCount: { type: Number, default: 0 },
    updateCount: { type: Number, default: 0 },
  },
  {
    versionKey: false,
  }
);

module.exports = mongoose.model("CountData", CountDataSchema);
