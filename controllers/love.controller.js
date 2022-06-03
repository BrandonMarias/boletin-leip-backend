const Loves = require("../models/love");

const contadorLoves = async (req, res) => {
  const data = await Loves.find();
  res.json({
    data,
  });
};

const agregarLove = async (req, res) => {
  const tarea = req.params.nombre;
  const { nombre, contador, _id } = await Loves.findOne({
    nombre: tarea,
  });

  if (nombre) {
    const suma = contador + 1;
    const registro = await Loves.findByIdAndUpdate(_id, { contador: suma });
    res.json({ msg: 'ok' });
  } else {
    res.status(500).json({
      error: "error en el servidor",
    });
  }
};

const quitarLove = async (req, res) => {
  const { nombre, contador, _id } = await Loves.findOne({
    nombre: req.params.nombre,
  });

  if (nombre) {
    const resta = contador - 1;
    const registro = await Loves.findByIdAndUpdate(_id, { contador: resta });
    res.json({ msg: 'ok' });
  } else {
    res.status(500).json({
      error: "error en el servidor",
    });
  }
};

module.exports = { contadorLoves, agregarLove, quitarLove };
