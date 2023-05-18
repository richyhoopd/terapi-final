const { Router } = require("express");
const router = Router();

const {
  registrarUsuario,
  iniciarSesion,
  obtenerTodos,
  agregarContactoEmergencia1,
  agregarContactoEmergencia2,
  obtenerUno
} = require("../controllers/user.controller");

router.route("/")
  .post(registrarUsuario)
  .get(obtenerTodos);

router.route('/:id')
  .get(obtenerUno)

router.route("/iniciar/sesion")
  .post(iniciarSesion);

router.route('/agregar/contacto/1/:id')
  .put(agregarContactoEmergencia1)

router.route('/agregar/contacto/2/:id')
  .put(agregarContactoEmergencia2)

module.exports = router;
