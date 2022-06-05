const { Schema, model } = require("mongoose");

const loveSchema = Schema({
  name: {
    type: String,
    required: true,
  },
  coment: {
    type: String,
    required: true,
  },
  date: {
    type: String,
  },
});

module.exports = model("Coments", loveSchema);
