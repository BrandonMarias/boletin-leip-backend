const { Router } = require("express");
const { check } = require("express-validator");
const { reqValidations } = require("../middlewares/reqValidation");

const router = Router();

const {
  obtenerComents,
  crearComent,
} = require("../controllers/coment.controller");

router.get("/", [], obtenerComents);

router.post(
  "/",
  [
    check("name", "nombre vacio").notEmpty(),
    check("coment", "coment vacio").notEmpty(),
    reqValidations,
  ],
  crearComent
);

module.exports = router;
