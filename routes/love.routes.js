const { Router } = require("express");
const { check } = require("express-validator");
const { reqValidations } = require("../middlewares/reqValidation");
const { ValidarNombreLove } = require("../helpers/db-validadores");

const router = Router();

const {
  contadorLoves,
  agregarLove,
  quitarLove,
} = require("../controllers/love.controller");

router.get("/", [], contadorLoves);

router.put(
  "/:nombre",
  [check("nombre").notEmpty().custom(ValidarNombreLove), reqValidations],
  agregarLove
);

router.delete(
  "/:nombre",
  [check("nombre").notEmpty().custom(ValidarNombreLove), reqValidations],
  quitarLove
);

module.exports = router;
