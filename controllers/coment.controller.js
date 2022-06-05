const Coment = require("../models/coment");
const Love = require("../models/love");

const obtenerComents = async (req, res) => {
  const data = await Coment.find();
  res.json({
    data,
  });
};

const crearComent = async (req, res) => {
  const { name, coment } = req.body;
  const newComent = new Coment({ name, coment });
  newComent.date = new Date().toLocaleDateString();

  await newComent.save();
  const newLove = new Love({ nombre: newComent._id });

  //guardar en db
  await newLove.save()

  res.json({ newComent });


};

module.exports = { obtenerComents, crearComent};
