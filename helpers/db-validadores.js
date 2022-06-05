const Loves = require("../models/love");

const ValidarNombreLove = async (nombre = "") => {
    const loveExist = await Loves.findOne({ nombre });
    console.log(loveExist)
    if (!loveExist) {
      throw new Error(`Error: el love ${nombre} no esta definido`);
    }
  };


module.exports = {ValidarNombreLove}