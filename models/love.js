const { Schema, model } = require("mongoose");

const loveSchema = Schema({
  nombre: {
    type: String,
    required: true,
  },
  contador: {
    type: Number,
    default: 0,
  }
});

module.exports = model("Loves", loveSchema);
