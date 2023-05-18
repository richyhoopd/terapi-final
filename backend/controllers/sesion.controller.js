const ctrl = {}
const Sesion = require('../models/sesion.model');

ctrl.crearSesion = async(req, res)=>{
    const {
            id_usuario,
            id_terapeuta,
            id_fecha
    } = req.body;

    const newSesion = await new Sesion({
        id_usuario,
        id_terapeuta,
        id_fecha
    }).save();

    res.json(newSesion);
}

ctrl.aceptar = async(req, res)=>{
    const {id} = req.params;
    const { link, aceptado } = req.body;

    const sesion = await Sesion.findByIdAndUpdate(id, {
        link,
        aceptado
    })

    res.json(sesion);
}

ctrl.obtenerTodas = async(req, res)=>{
    const sesiones = await Sesion.find();

    res.json(sesiones);
}

ctrl.obtenerUno = async(req, res)=>{
    const {id} = req.params;
    const sesion = await Sesion.findById(id);

    res.json(sesion);
}

ctrl.eliminar = async(req, res)=>{
    const {id} = req.params;
    const sesion = await Sesion.findOneAndDelete(id);

    res.json(sesion);
}

module.exports = ctrl;