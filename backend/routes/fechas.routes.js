const { Router } = require("express");
const router = Router();

const {obtenerFechaDisponible, agregarFecha, obtenerTodas, eliminar, obtenerUna} = require('../controllers/fechas.controller');

router.route('/')
    .post(agregarFecha)
    .get(obtenerTodas)
    
router.route('/fecha/:fecha')
    .get(obtenerFechaDisponible)

router.route('/:id')
    .delete(eliminar)
    .get(obtenerUna)


module.exports = router;
