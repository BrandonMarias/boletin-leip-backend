const { Router } = require("express");
const { model } = require("mongoose");
const router = Router();

const {
  contadorLoves,
  agregarLove,
  quitarLove,
} = require("../controllers/love.controller");

router.get("/", [], contadorLoves);

router.put("/:nombre", [], agregarLove);

router.delete("/:nombre", [], quitarLove);

module.exports = router;
