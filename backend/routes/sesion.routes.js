const { Router } = require("express");
const router = Router();

const {crearSesion, aceptar, obtenerTodas, obtenerUno, eliminar} = require('../controllers/sesion.controller');

router.route('/')
    .post(crearSesion)
    .get(obtenerTodas)
    
router.route('/:id')
    .get(obtenerUno)
    .put(aceptar)
    .delete(eliminar)


module.exports = router;
